// Global Execution Context
// Lexical Environment = {
//        environmentRecord = { name: "Jack", age: 30, status: 'Software Engineer' },
//        outer: null
// }

let name = "Jack";
let age = 30;
let status = "Software Engineer";

function sayHi() {
   // Function Execution Context
   // Lexical Environement = {
   // environmentRecord: {},
   // outer: [reference to outer environmentRecord]
   // }

   //    let status = "Software Engineer";

   console.log(status);

   function callback() {
      // Function Execution Context
      // Lexical Environement = {
      // environmentRecord: {},
      // outer: [reference to outer environmentRecord]
      // }

      console.log(status);
   }

   callback();
}

sayHi();

function sayBye() {
   // Function Execution Context
   // Lexical Environement = {
   // environmentRecord: {},
   // outer: [reference to outer environmentRecord]
   // }

   console.log(name);
}

sayBye();
