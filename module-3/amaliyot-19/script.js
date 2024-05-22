// Creation phase
// var age = undefined
// let status = uninitialized
// const major = uninitialized
// function sayHi = function(reference to the original function)

// Execution phase
// age = 30
// status = 'active
// major = 'programming'

var age = 30;
let status = "active";
const major = "programming";
function sayHi() {
   console.log("hi");
}
const sayBye = function (name = "Alex") {
   console.log("bye", name);
};

sayBye("Jack");
sayBye("Mark");
sayBye();
