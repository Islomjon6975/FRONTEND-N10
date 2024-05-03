function calculator(n1, n2, option) {
   switch (option) {
      case "+": {
         return n1 + n2;
      }
      case "-": {
         return n1 - n2;
      }
      case "*": {
         return n1 * n2;
      }
      case "/": {
         return n1 / n2;
      }
      case "%": {
         return n1 % n2;
      }
      case "^": {
         return Math.pow(n1, n2);
      }

      default: {
         console.log("Invalid option");
      }
   }
}

let n1;
while (typeof n1 !== "number") {
   n1 = +prompt("n1: ");
}

let option;
while (!["+", "-", "*", "/", "%", "^"].includes(option)) {
   option = prompt("option (+;-;*;/;%;^): ");
}

let n2;
while (typeof n2 !== "number") {
   n2 = +prompt("n2: ");
}

let calc = calculator(n1, n2, option);

console.log(calc);
