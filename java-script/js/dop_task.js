const str = "Hello";
const num = 10;
const bool = true;
const un = undefined;
const nl = null;
console.log(typeof str);
console.log(typeof num);
console.log(typeof bool);
console.log(typeof un);
console.log(typeof nl);

console.log(str === num);
console.log("Hello" === 10);
console.log("string" === "number");

console.log(10 === 12);
console.log("number" === "number");
console.log("Hello" === 10);
// //input === true
// undefenid === true
// typeof undefenid // 'undefenid'
// typeof true // 'boolean'
// typeof null // "object"
// 'undefenid' !== "objecе
// // правило сравнения для === и !==
// 1. сравниваються строки в pезультате typeof
// 2. если первое віполнилось то сравниваються значения.
