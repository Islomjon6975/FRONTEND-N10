function increment() {
   let count = 0;

   return function () {
      count++;
      console.log(count);
   };
}

let result1 = increment();
result1();
result1();
result1();
let hacker = 100;
result1();
result1();
result1();

// Closure -> innerFunction outerFunction'ning lexical enviromentda saqlangan o'zgaruvchilariga access bo'lishiga aytiladi.
