const arr1 = [1, 2, 3, 4];
const arr2 = [...arr1];

arr2[0] = "100";
// console.log(arr1)
// console.log(arr2)

const people1 = [{ name: "Joe" }, { name: "Biden" }];

// const people2 = [...people1];
const people2 = JSON.parse(JSON.stringify(people1));
people2[0].name = "Mike";
// console.log(people1)
// console.log(people2)

// const obj1 = {
//   a: {
//     name: "Jack",
//   },
//   b: {
//     name: "None",
//   },
//   c: undefined,
//   sayHi: function () {
//     console.log("hello");
//   },
// };

// console.log(JSON.stringify(obj1));
// const obj2 = JSON.parse(JSON.stringify(obj1));

// conditional operator
const count = 50;
// console.log(count);
let result = count < 50 ? "lose" : "win";
// console.log(result)

// don't recommend it, just use if else or switch
// const count = 50;
// console.log(count);
// let result = count < 50 ? "lose" : count > 50 ? "win" : "tie";
// console.log(result);

// let name = "George"
// switch(name){
//   default:
//     console.log(name, "not found");
//     break;
//   case "Joe":
//     console.log("Joe");
//     break;
//   case "Mike":
//     console.log("Mike");
//     break;
// }

// const person = {
//   name: "Joe Biden",
//   age: 80,
//   sayHi: function () {
//     console.log("Hi, my name is", this.name, "I am", this.age, "years old");
//   },
// };

// person.sayHi();

// constructor function
function Box(height, width, length, color) {
  this.height = height;
  this.width = width;
  this.length = length;
  this.color = color;
}

Box.prototype.setColor = function (newColor) {
  this.color = newColor;
};

// instance is the object created by a constructor
const box1 = new Box(3, 3, 2, "red");
const box2 = new Box(3, 3, 2, "red");
const box3 = new Box(3, 3, 2, "red");
const box4 = new Box(3, 3, 2, "red");

// console.log(box1);
// box1.setColor("blue");
// console.log(box1);
// box2.setColor("blue");
// console.log("box2",box2);

// console.log(box2.setColor);

// prototype and prototype chain
// const proto2 = {
//   c: "c",
//   d: "d"
// }

// const proto1 = {
//   b: "b",
//   __proto__: proto2
// }

// const obj1 = {
//   a: "a",
//   //this proto object will become obj1's prototype
//   __proto__: proto1
// }

// const obj2 = {
//   a: "a2",
//   __proto__: proto1
// }
// const obj3 = {
//   a: "a3",
//   __proto__: proto1
// }

// console.log(obj1.b)
// console.log(obj2.b)
// console.log(obj3.b)

class BoxC {
  constructor(height, width, length, color) {
    this.height = height;
    this.width = width;
    this.length = length;
    this.color = color;
  }

  setColor(newColor) {
    this.color = newColor;
    // console.log(this)
    console.log(this.color);
  }
}

const bc1 = new BoxC(1, 2, 3, "red");

const setColorCopy = bc1.setColor.bind(bc1);

// console.log(setColorCopy===bc1.setColor);

// setColorCopy("blue")
// console.log(bc1);

// function definition vs invoking function
// function foo(callback){
//   callback()
// }

// function bar(){
//   console.log("bar")
// }

// foo(bar())

const arr = [1, 2, 3, 4];

Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};

// arr.myForEach((e,i,arr)=>{
//   console.log(e,i,arr);
// })

// myMap, myFilter, myReduce


const anObj = {
  fname: "Joe",

  delaySayHi: function () {
    const parentThis = this;
    setTimeout(()=> {
      console.log(this)
      console.log(this===parentThis)
      console.log("hi,", this.fname);
    }, 2000);
  },
};

// anObj.delaySayHi();


function foo(){

}
