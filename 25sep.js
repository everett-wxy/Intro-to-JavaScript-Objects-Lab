// //FUNCTION

// /*
// reusable
// compartmentalise code
// return 1 thing only
// */

// // function declaration
// function functionName(parameter1) {
//     // codes
//   }

//   // function expression
//   const functionName2 = function (parameter1) {
//     //codes
//   };

//   function calculateRectangle(width, height) {
//     const area = width * height;
//     return area;
//   }

//   //invoking a function
//   const area = calculateRectangle(3, 4);

//   const x = 14;
//   const y = 28;

//   const area2 = calculateRectangle(x, y);

//   //default value of a function
//   // to invoke the default value, you need to code in undefined
//   function defaultValueFunction(width = 30, height = 40) {
//     // const area = width * height;
//     // return area;
//     return width * height;
//   }

//   const area3 = defaultValueFunction(undefined, x);

//   /*
//   to invoke/use a function, you need to code ()
//   */

//   function sumNumbers1(...nums) {}

//   // anonymous function
//   let points = [1, 232, 32, 4535, 9];

//   points.sort(function (a, b) {
//     return a - b; // ascending
//     // return b - a; descending
//   });

//   // arrow function
//   const returnNum = () => 123;

//   function returnNum() {
//     return 123;
//   }

//   const calNum = () => 5 * 6; // auto return

//   const calTriangle = (x, y) => 0.5 * x * y;
//   const area = calTriangle(5, 8);

//   const calHypotenuse = (x, y) => {
//     const hypotenuse = Math.sqrt(x ** 2 + y ** 2);
//     return Math.round(hyptoenuse * 1000) / 1000;
//   };

// /*
// JS OBJECTS
// Objects is different from JS objects (key-value pairs)
// Objects = kvp = key-value pairs
// wrapped in curly brackets {}
// */

// const kvp = {};
// const kvp2 = {time: "12:00", activity:"lunch"};

// // Adding and editing items into an object | uses the same syntax
// kvp2.day = 'Saturday'   // dot notation | if special characters is not included
// kvp2['day'] = 'Saturday'    // bracket notation
// kvp2['day-time'] = "Saturday 5:00"
// kvp2.time = "11:30"

// // returning value of a key
// kvp2.day;
// kvp2['day'];

// // delete
// delete  kvp2.day

// // to check if a key exisit
// if ('day' in kvp2){
//     console.log('Yes')
// };

// // returns an array of keys
// console.log(Object.keys(kvp2));
// console.log(Object.values(kvp2));
// console.log(Object.entries(kvp2));

// for (const [key, value] of Object.entries(kvp2)){
//     console.log(`${key}:${value}`);
// }

// // shallow copy objects
// const shallowCopy = {...kvp2};

// // deep copy objects
// const deepCopy = JSON.parse(JSON.stringify(chicken));
// const deepCopy2 = structuredClone(chicken);

// // DESTRUCTURING
// // [ ] on the left hand side is not an array
// // primary prupose of destructing is to pull individual values of an array and assigning it into an variable
// // The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

// const setVar = () => [1,2,3,4,5]
// const [x,y] = setVar() // array

// calTraingle (x,y)

// const setVar = () => {
//     return { anime:"zebra", address: "zoo"}
// }

// const {animal, address} = setVar()
// animal => "zebra"
// address => "zoo"

// cost {animal: x, address: y} = setVar()

// x => "zebra"
// y => "zoo"

// // SCOPING
// // global scope -> retrievable everywhere
// // block scope -> only retrievable in the blaock itself

// pass by value
const dog = 7;
const changeVar = (cat) => {
  cat = 777;
  console.log("cat", cat);
};

changeVar(dog);
console.log("dog", dog);

// pass by references
const chicken = [1, 2, 3, 4];
const changeArr = (duck) => {
  duck[0] = 17;
};

changeArr(chicken);

console.log(chicken);

const horse = { hay: "hello", barn: "open" };
const changeKvp = (cow) => {
  cow.hay = "bye";
};

changeKvp(horse);
console.log(horse);
