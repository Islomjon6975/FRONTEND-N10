// console.log("Darsda uxlamaymiz!");
// console.info("Info");
// console.error("Error");
// console.warn("Warn");
// console.table({ name: "Jack", age: 30, status: "Software Engineer" });
// console.table({ name: "John", age: 20, status: "Hardware Engineer" });

// alert("Hello world!");
// let name = prompt("Enter your name: ");
// let year = +prompt("Enter birth year: ");
// let age = 2024 - year;

// console.log(name);
// console.log(typeof name);

// console.log("---------------------");

// console.log(year);
// console.log(typeof year);

// console.log(name + " siz " + age + " yoshdasiz.");

// #1
// let l = +prompt("L ni sm da kiriting: ", "");
// let m = l / 100;
// console.log(l + "sm = " + m + "m ga");

// #4
// let A = +prompt("A: ", "");
// let B = +prompt("B: ", "");

// let result = parseInt(A / B);
// let qoldiq = A % B;

// console.log(
//    A +
//       " ni ichida " +
//       B +
//       " ni " +
//       result +
//       " marta joylashtirsa boladi. Qoldiq: " +
//       qoldiq
// );

// #6
let son = 96;

let birlik = son % 10;
let onlik = (son - birlik) / 10;

console.log("O'nliklar xonasi: " + onlik);
console.log("Birliklar xonasi: " + birlik);

let n1 = 10;
let n2 = 20;

let store = n1;
n1 = n2;
n2 = store;
console.log(n1, n2);
