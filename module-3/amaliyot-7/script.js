// FOR, WHILE, DO WHILE, ARRAY

// FOR
// let name = "Jack";

// for (let i = 0; i <= name.length; i++) {
//    console.log(name[i]);
// }

// WHILE
// let count = 0;

// while (count < 10) {
//    console.log("hello");

//    count++;
// }

// let name;

// #1
// while (!name || name.length === 0) {
//    if (!name || name.length === 0) {
//       alert("Please enter your name");
//    }

//    name = prompt("What is your name?");
// }

// console.log(name);

// Trusy: true, "soemthing", 12, [], {},
// Falsy: false, 0, null, undefined, NaN

// #2

// let option;

// while (!["+", "-", "*", "/", "0"].includes(option)) {
//    option = prompt(
//       "+ - addition\n- - subtraction\n* - multiplication\n/ - division\n\n 0 - Exit"
//    );

//    let num1;
//    while (!num1 || typeof num1 !== "number") {
//       num1 = +prompt("Num1: ");
//    }

//    let num2;
//    while (!num2 || typeof num2 !== "number") {
//       num2 = +prompt("Num2: ");
//    }

//    switch (option) {
//       case "+": {
//          alert(`n1 + n2 = ${num1 + num2}`);
//          break;
//       }
//       case "-": {
//          alert(`n1 - n2 = ${num1 - num2}`);
//          break;
//       }
//       case "*": {
//          alert(`n1 * n2 = ${num1 * num2}`);
//          break;
//       }
//       case "/": {
//          alert(`n1 / n2 = ${num1 / num2}`);
//          break;
//       }
//       case "0": {
//          alert("Goodbye");
//          break;
//       }
//       default: {
//          alert("Invalid option");
//          break;
//       }
//    }
// }

// console.log(option);

// while versus do while

// let count = 0;

// do {
//    console.log(count);
//    count++; // 1
// } while (1 < 0);

// while (count < 0) {
//    console.log(count);
//    count++;
// }

// let num;
// let random = 5;

// do {
//    num = +prompt("Enter a number: ");
//    if (num % random === 0) {
//       console.log(`${num} is divisible by ${random}`);
//       break;
//    } else {
//       continue;
//    }
// } while (true);

// while (true) {
//    num = +prompt("Enter a number: ");
//    if (num % random === 0) {
//       console.log(`${num} is divisible by ${random}`);
//       break;
//    } else {
//       continue;
//    }
// }
