let num = 234;

let birlik = num % 10;
let onlik = ((num % 100) - birlik) / 10;
let yuzlik = (num - (num % 100)) / 100;

console.log(birlik, onlik, yuzlik);

console.log(
   birlik - 1 === onlik && onlik - 1 === yuzlik && birlik - 2 === yuzlik
);

// npm init
// npm install prompt-sync
// const prompt = require("prompt-sync")();
