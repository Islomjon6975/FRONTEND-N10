// 1-10
// for (let i = 1; i < 10; i++) {
//    console.log(`================= ${i} kara ====================`);
//    for (let k = 1; k <= 10; k++) {
//       console.log(`i=${i}`, `k=${k}`, `${i}*${k}=${i * k}`);
//    }
// }

//
// let str = "Bob Jane";
// let result = "something" + " " + str;
// console.log(result);

// let name = "Jack Smith";
// let newName = "";
// // let lastCharacter = name[name.length - 1];
// let lastCharacter = name.at(name.length - 1);

// if (lastCharacter === lastCharacter.toUpperCase()) {
//    for (let i = 0; i < name.length - 1; i++) {
//       newName += name[i];
//    }

//    newName += lastCharacter.toLowerCase();
// }

// if (lastCharacter === lastCharacter.toLowerCase()) {
//    for (let i = 0; i < name.length - 1; i++) {
//       newName += name[i];
//       console.log("name[i]=", name[i]);
//    }

//    newName += lastCharacter.toUpperCase();
// }

// console.log(name, "|", newName);

// let alphabet = {
//    65: "A",
//    66: "B",
//    67: "C",
//    68: "D",
//    69: "E",
//    70: "F",
//    71: "G",
//    72: "H",
//    73: "I",
//    74: "J",
//    75: "K",
//    76: "L",
//    77: "M",
//    78: "N",
//    79: "O",
//    80: "P",
//    81: "Q",
//    82: "R",
//    83: "S",
//    84: "T",
//    85: "U",
//    86: "V",
//    87: "W",
//    88: "X",
//    89: "Y",
//    90: "Z",
// };

// let alphabet = {};
// // let sum = 0;

// for (let i = 97; i <= 122; i++) {
//    alphabet[i] = String.fromCharCode(i);
// }

// for (let key in alphabet) {
//    if (key % 2 !== 0) {
//       sum += +key;
//    }
// }

// console.log(sum);

// let aplhabet = {};

// let str1 = prompt("aplhabet 1: ");
// let str2 = prompt("aplhabet 2: ");

// let n1 = str1.charCodeAt(0);
// let n2 = str2.charCodeAt(0);

// for (let i = n1; i <= n2; i++) {
//    result[i] = String.fromCharCode(i);
// }
// console.log(aplhabet);

// break;

// for (let i = 1; i <= 10; i++) {
//    if (i === 3) {
//       continue;
//    } else if (i === 5) {
//       continue;
//    } else if (i === 8) {
//       break;
//    }
//    console.log(i);
// }

let arr = [2, 1, 4, 6, 3, 10];
let min = 0;
let max = 0;

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
   if (max < arr[i]) {
      max = arr[i];
   }
   if (min == 0 || min > arr[i]) {
      min = arr[i];
   }
}

let result = [min, max];
console.log("max:", max);
console.log("min:", min);
console.log(result);
