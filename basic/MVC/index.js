const API = (function () {
  const API_URL = "http://localhost:3000/todos";

  const getTodos = async () => {
    const res = await fetch(`${API_URL}`);
    return await res.json();
  };

  const postTodo = async (newTodo) => {
    const res = await fetch(`${API_URL}`, {
      method: "POST",
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(newTodo),
    });
    return await res.json();
  };

  const deleteTodo = async (id) => {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    return await res.json();
  };

  return {
    getTodos,
    postTodo,
    deleteTodo,
  };
})();

class TodoModel {
  #todos = [];
  constructor() {}
  getTodos() {
    return this.#todos;
  }
  async fetchTodos() {
    this.#todos = await API.getTodos();
  }
  async addTodo(newTodo) {
    const todo = await API.postTodo(newTodo);
    this.#todos.push(todo);
    return todo;
  }

  async removeTodo(id) {
    const removedId = await API.deleteTodo(id);
    this.#todos = this.#todos.filter((todo) => todo.id !== id);
    return removedId;
  }
}

class TodoView {
  constructor() {
    this.form = document.querySelector(".todo-app__form");
    // this.addBtn = document.querySelector(".todo-app__add-btn");
    this.input = document.getElementById("todo-app__input");
    this.todolist = document.querySelector(".todolist");
  }

  initRenderTodos(todos) {
    this.todolist.innerHTML = "";
    todos.forEach((todo) => {
      this.appendTodo(todo);
    });
  }

  removeTodo(id) {
    const element = document.getElementById(`todo-${id}`);
    element.remove();
  }

  appendTodo(todo) {
    const todoElem = this.createTodoElem(todo);
    this.todolist.append(todoElem);
  }

  createTodoElem(todo) {
    const todoElem = document.createElement("div");
    todoElem.classList.add("todo");
    todoElem.setAttribute("id", `todo-${todo.id}`);

    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = todo.title;
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("todo__delete-btn");
    deleteBtn.setAttribute("remove-id", todo.id);
    deleteBtn.textContent = "delete";

    todoElem.append(title, deleteBtn);
    return todoElem;
  }
}

class TodoController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.init();
  }

  async init() {
    this.setUpEvents();
    await this.model.fetchTodos();
    this.view.initRenderTodos(this.model.getTodos());
  }

  setUpEvents() {
    this.setUpAddEvent();
    this.setUpDeleteEvent();
  }

  setUpAddEvent() {
    this.view.form.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = this.view.input.value;
      this.model
        .addTodo({
          title,
          completed: false,
        })
        .then((todo) => {
          this.view.appendTodo(todo);
        });
    });
  }

  setUpDeleteEvent() {
    this.view.todolist.addEventListener("click", (e) => {
      const isDeleteBtn = e.target.classList.contains("todo__delete-btn");
      if (isDeleteBtn) {
        const removeId = e.target.getAttribute("remove-id");
        this.model.removeTodo(removeId).then(() => {
          this.view.removeTodo(removeId);
        });
      }
    });
  }
}

const model = new TodoModel();
const view = new TodoView();
const controller = new TodoController(model, view);
