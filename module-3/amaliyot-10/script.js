// let sum = 0;

// for (let i = 0; i < nums.length; i++) {
//    sum += nums[i];
// }

// for (let item of nums) {
//    sum += item;
// }
// let nums = [1, [2, [1]], 3];

// nums = nums.flat(Infinity);

// let sum = nums.reduce((sum, item) => sum + item, 0);

// console.log(sum);

// const workers = [
//    {
//       _id: 1,
//       name: "Farrux",
//       age: 25,
//       salary: 12000,
//       department: "IT",
//    },
//    {
//       _id: 2,
//       name: "Farhodbek",
//       age: 19,
//       salary: 1000,
//       department: "Software Engineering",
//    },
//    {
//       _id: 3,
//       name: "Sindor",
//       age: 25,
//       salary: 10000,
//       department: "Software Engineering",
//    },
// ];

// function getTotalSalaryOfWorkers(workers) {
//    return workers.reduce((yigindi, user) => yigindi + user.salary, 0);
// }

// let result = getTotalSalaryOfWorkers(workers);

// console.log(`Total salary: $${result}`);

// function reverseImage(arr) {
//    let result = [];

//    for (let item of arr) {
//       let innerArr = [];
//       for (let innerItem of item) {
//          if (innerItem === 0) {
//             innerArr.push(1);
//          } else if (innerItem === 1) {
//             innerArr.push(0);
//          }
//       }

//       result.push(innerArr);
//    }

//    return result;
// }

// console.log(
//    reverseImage([
//       [1, 0, 0],
//       [0, 1, 0],
//       [0, 0, 1],
//    ])
// );

// =============================Function constructor=====================================

// let user1 = {
//      name: "Farrux",
//      age: 25,
//      salary: 12000,
//      department: "IT",
// }

// function User(name, age, salary, department) {
//    // {}
//    this.name = name;
//    this.age = age;
//    this.salary = salary;
//    this.department = department;
//    this.getInfo = function () {
//       console.log(`${this.name} is ${this.age} years old.`);
//    };

//    // return {}
// }

// const user1 = new User("Farrux", 25, 12000, "IT");

// user1.getInfo();

// console.log(user1);

// Oson1
// function Oson1(a) {
//    this.a = a;
//    this.outputA = function () {
//       console.log(this.a);
//    };
// }

// let oson1 = new Oson1(10);
// oson1.outputA();

// "MyClass6" nomli function constructor elon qililar. Bu function constructorda "words" list bo'sh o'zgaruvchisi bor. addWord(word) - bu funksiya "words" ga element qo'shib qo'ysin. remove(word) = bu funksiya "words" da "word" ni o'chirib tashlasin.

function MyClass6() {
   this.words = [];
   this.addWord = function (word) {
      this.words.push(word);
   };
   this.remove = function (word) {
      let index = this.words.indexOf(word);
      let newArr = [];
      for (let i = 0; i < this.words.length; i++) {
         if (this.words[i] !== word) {
            newArr.push(this.words[i]);
         }
      }

      this.words = newArr;
   };
}

const myClass6 = new MyClass6();
myClass6.addWord("HTML");
myClass6.addWord("CSS");
myClass6.addWord("CSS");
myClass6.addWord("CSS");

console.log(myClass6.words);

myClass6.remove("CSS");

console.log(myClass6.words);
