const students = [
   {
      _id: 1,
      name: "Jack",
      age: 25,
      department: "IT",
      salary: 12000,
   },
   {
      _id: 2,
      name: "Jane",
      age: 19,
      department: "Software Engineering",
      salary: 1000,
   },
   {
      _id: 3,
      name: "Bob",
      age: 21,
      department: "frontend",
      salary: 15000,
   },
   {
      _id: 4,
      name: "Sindor",
      age: 19,
      department: "Frontend",
      salary: 1100,
   },
   {
      _id: 5,
      name: "Farhodbek",
      age: 19,
      department: "Software Engineering",
      salary: 1000,
   },
];

// const filteredStudents = students.filter((student) => student.age < 20);

// const filteredStudents = students.filter(
//    (student) =>
//       student.salary > 1000 && student.department.toUpperCase() === "FRONTEND"
// );

// console.table(filteredStudents);

// forEach

// students.forEach((student, index) => {
//    console.log(
//       `${index + 1}. ${student.name} - ${student.department}. - ${
//          student.salary
//       }`
//    );
// });

// for (let student of students) {
//    console.log(
//       `${student._id}. ${student.name} - ${student.department}. - ${student.salary}`
//    );
// }

// for (let i = 0; i < students.length; i++) {
//    console.log(
//       `${students[i]._id}. ${students[i].name} - ${students[i].department}. - ${students[i].salary}`
//    );
// }

// const totalPrice = students.reduce((sum, student) => sum + student.salary, 0);

// console.log(totalPrice);

// const foundStudent = students.find(
//    (student, index, array) => student._id === 1
// );

// console.log(foundStudent);
