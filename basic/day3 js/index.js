// es5 syntax
// primitive types
var number = 1;
// console.log(number, typeof number);
var string = "i'm a string";
// console.log(string, typeof string);
var bool = true;
// console.log(bool, typeof bool);
// undefined is a data type
var und;
// console.log(und, typeof und);
// not defined is an error
// console.log(blahblahblah)
var nul = null;
// console.log(nul, typeof nul);

// type coercion
const num1 = 1;
const str1 = "1";

// loose comparison, type coercion will happen
if ([] == 0) {
//   console.log(true);
} else {
//   console.log(false);
}

// strict comparison
if(1==="1"){
    // console.log(true);
} else {
    // console.log(false);
}




// var num1 = 4;
// var num2 = num1;
// num1 = 210942104;
// console.log("num2",num2)

//reference types, objects
var obj1 = {
  a: "a",
  b: "b",
};

var obj2 = obj1;
obj2.a = "new a";

// console.log("obj1",obj1)
// console.log("obj2",obj2)

var arr1 = [1, 2, 3, 4];
var arr2 = arr1;

arr2[0] = 1000;
// console.log("arr1",arr1)
// console.log("arr2",arr2)

// TL;DR
// we don't use var anymore
// use const for almost anything, unless you need to use let

function fscope() {
  //   console.log(a)
  if (false) {
    var a = "a";
  }
  console.log(a);
}

// fscope();

// block scope
if (true) {
  let b = "b";

  if (true) {
    let b = "b";
    const c = "c";
  }
}

// console.log(b);

// console.log(hoist)
// var hoist = "12312"

// var hoist;
// console.log(hoist)
// hoist = "12312"

if (true) {
  // 1st scope
  const a = "a";
  if (true) {
    // 2nd scope
    const a = "new a";
    // console.log(b) will give error
    if (true) {
      const b = "b";
      // 3rd scope
    }
  }
}




// shawllow copy vs deep copy
// functions, closures, currying, conditional operator