// function getBeef(cb) {
//   setTimeout(() => {
//     cb("beef");
//   }, 1000);
// }

// function cookBeef(beef, cb) {
//   setTimeout(() => {
//     if (beef === "beef") {
//       cb("patty");
//     }
//   }, 500);
// }

// function makeBurger(patty, cb) {
//   setTimeout(() => {
//     if (patty === "patty") {
//       cb("burger");
//     }
//   }, 1000);
// }

//   getBeef((beef) => {
//     console.log(beef);
//     cookBeef(beef, (patty) => {
//       console.log(patty);
//       makeBurger(patty, (burger) => {
//         console.log("serve", burger);
//       });
//     });
//   });

// const p = new Promise((resolve, reject) => {
//     if (Math.random() > 0.5) {
//   resolve("book");
//     } else {
//       reject("book not available");
//     }
// });

// const result = p.then((book) => {
//   console.log(book);
//   return "cover"
// }).then(cover=>{
//     console.log(cover)
//     return "123"
// }).then(res=>{
//     console.log(res);
//     return "qiowrqowji"
// }).then(res=>{
//     console.log(res)
// })

function getBeef() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("beef");
    }, 1000);
  });
}

function cookBeef(beef) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (beef === "beef") {
        res("patty");
        // rej("no")
      }
    }, 500);
  });
}

function getBun() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("bun");
    }, 500);
  });
}

function makeBurger(patty, bun) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (patty === "patty" && bun === "bun") {
        res("burger");
      } else {
        rej("ingredients not available");
      }
    }, 500);
  });
}

// getBeef()
//   .then((beef) => {
//     console.log(beef);
//     return cookBeef(beef);
//   })
//   .then((patty) => {
//     console.log(patty);
//     return getBun().then((bun) => {
//       console.log(bun);
//       return makeBurger(patty, bun);
//     });
//   })
//   .then((burger) => {
//     console.log(burger);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async / await syntax

async function burgerKing() {
  console.log("hello world");
  try {
    const beef = await getBeef();
    console.log(beef);
    const patty = await cookBeef(beef);
    console.log(patty);
    const bun = await getBun();
    console.log(bun);
    const burger = await makeBurger(patty, bun);
    console.log(burger);
  } catch (err) {
    console.log(err);
  }
}

// burgerKing()


const bar = async () => 5;


// Misc
class Hello {
    static sayHi(){
        console.log("hi")
    }

    pHi(){
        console.log("this is prototype method");
    }
}
const h = new Hello();
// h.pHi();
// Hello.sayHi();


const myPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello, world!');
    }, 3000);
  });

  const myPromise2 = new Promise((resolve, reject) => {
   resolve("qwoieqwoje")
  });

  Promise.all([myPromise1,myPromise2]).then(result=>{
    console.log(result)
  })