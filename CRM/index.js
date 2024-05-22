import PromptSync from "prompt-sync";

const prompt = PromptSync();

const student = {
   _id: "1",
   name: "Jack Smith",
   age: 25,
   gender: "male",
   phone: "+99899 999 99 99",
   major: "frontend",
   profession: "JavaScript",
   groupName: "Frontend BootCamp N10",
   room: "Apple",
   lessons: [
      {
         lessonId: "1-1",
         date: "2024-05-1",
         lessonName: "HTML Basics",
         absent: false,
         late: false,
         tasks: [
            { task_name: "Create a basic HTML page", completed: true },
            { task_name: "Add images and links", completed: true },
            { task_name: "Use Semantic HTML tags", completed: false },
         ],
      },
      {
         lessonId: "1-2",
         date: "2024-05-2",
         lessonName: "CSS Basics",
         absent: false,
         late: false,
         tasks: [
            { task_name: "Create a table", completed: true },
            { task_name: "Add rows to table", completed: true },
            { task_name: "Use Semantic HTML tags", completed: true },
         ],
      },
      {
         lessonId: "1-3",
         date: "2024-05-3",
         lessonName: "JavaScript Basics",
         absent: false,
         late: false,
         tasks: [
            { task_name: "Create a basic HTML page", completed: true },
            { task_name: "Add images and links", completed: true },
            { task_name: "Use Semantic HTML tags", completed: false },
         ],
      },
   ],
   erpInfo: {
      username: "jack",
      password: "1234",
      profileImage: "https://images.google.com/img1",
   },
};

// #1. db
let db = [
   {
      _id: "1",
      name: "Jack Smith",
      age: 25,
      gender: "male",
      phone: "+99899 999 99 99",
      major: "frontend",
      profession: "JavaScript",
      groupName: "Frontend BootCamp N10",
      room: "Apple",
      lessons: [
         {
            lessonId: "1-1",
            date: "2024-05-1",
            lessonName: "HTML Basics",
            absent: false,
            late: false,
            tasks: [
               { task_name: "Create a basic HTML page", completed: true },
               { task_name: "Add images and links", completed: true },
               { task_name: "Use Semantic HTML tags", completed: false },
            ],
         },
         {
            lessonId: "1-2",
            date: "2024-05-2",
            lessonName: "CSS Basics",
            absent: false,
            late: false,
            tasks: [
               { task_name: "Create a table", completed: true },
               { task_name: "Add rows to table", completed: true },
               { task_name: "Use Semantic HTML tags", completed: true },
            ],
         },
         {
            lessonId: "1-3",
            date: "2024-05-3",
            lessonName: "JavaScript Basics",
            absent: false,
            late: false,
            tasks: [
               { task_name: "Create a basic HTML page", completed: true },
               { task_name: "Add images and links", completed: true },
               { task_name: "Use Semantic HTML tags", completed: false },
            ],
         },
      ],
      erpInfo: {
         username: "jack",
         password: "1234",
         profileImage: "https://images.google.com/img1",
      },
   },
   {
      _id: "2",
      name: "Mark Smith",
      age: 30,
      gender: "male",
      phone: "+99899 999 99 99",
      major: "frontend",
      profession: "JavaScript",
      groupName: "Frontend BootCamp N10",
      room: "Apple",
      lessons: [
         {
            lessonId: "1-1",
            date: "2024-05-1",
            lessonName: "HTML Basics",
            absent: false,
            late: true,
            tasks: [
               { task_name: "Create a basic HTML page", completed: false },
               { task_name: "Add images and links", completed: true },
               { task_name: "Use Semantic HTML tags", completed: false },
            ],
         },
         {
            lessonId: "1-2",
            date: "2024-05-2",
            lessonName: "CSS Basics",
            absent: false,
            late: false,
            tasks: [
               { task_name: "Create a table", completed: true },
               { task_name: "Add rows to table", completed: true },
               { task_name: "Use Semantic HTML tags", completed: true },
            ],
         },
         {
            lessonId: "1-3",
            date: "2024-05-3",
            lessonName: "JavaScript Basics",
            absent: false,
            late: false,
            tasks: [
               { task_name: "Create a basic HTML page", completed: true },
               { task_name: "Add images and links", completed: true },
               { task_name: "Use Semantic HTML tags", completed: false },
            ],
         },
      ],
      erpInfo: {
         username: "jack",
         password: "1234",
         profileImage: "https://images.google.com/img1",
      },
   },
   {
      _id: "3",
      name: "Alex Smith",
      age: 20,
      gender: "male",
      phone: "+99899 888 88 88",
      major: "frontend",
      profession: "JavaScript",
      groupName: "Frontend BootCamp N10",
      room: "Apple",
      lessons: [
         {
            lessonId: "1-1",
            date: "2024-05-1",
            lessonName: "HTML Basics",
            absent: false,
            late: false,
            tasks: [
               { task_name: "Create a basic HTML page", completed: true },
               { task_name: "Add images and links", completed: true },
               { task_name: "Use Semantic HTML tags", completed: false },
            ],
         },
         {
            lessonId: "1-2",
            date: "2024-05-2",
            lessonName: "CSS Basics",
            absent: false,
            late: false,
            tasks: [
               { task_name: "Create a table", completed: true },
               { task_name: "Add rows to table", completed: true },
               { task_name: "Use Semantic HTML tags", completed: true },
            ],
         },
         {
            lessonId: "1-3",
            date: "2024-05-3",
            lessonName: "JavaScript Basics",
            absent: false,
            late: false,
            tasks: [
               { task_name: "Create a basic HTML page", completed: true },
               { task_name: "Add images and links", completed: true },
               { task_name: "Use Semantic HTML tags", completed: false },
            ],
         },
      ],
      erpInfo: {
         username: "jack",
         password: "1234",
         profileImage: "https://images.google.com/img1",
      },
   },
];

// #2 displayStudentsInfo
function displayStudentsInfo(database = db) {
   if (!database.length) {
      console.log("No students here yet.");
      return;
   }

   database.forEach(({ name, profession, groupName, room }, index) => {
      console.log(
         `${index + 1}. ${name} - ${profession} - ${groupName} - ${room}.`
      );
   });
}

// #3 removeStudent
function removeStudent() {
   const studentId = prompt("Enter a student ID: ");
   const foundStudent = db.find((student) => student._id === studentId);

   if (!studentId) {
      console.log("Invalid ID.");
      return;
   }

   if (!foundStudent) {
      console.log("Student not found.");
      return;
   }

   db = db.filter((student) => student._id !== studentId);

   displayStudentsInfo();
}

// #4 updateStudentInfo
function updateStudentInfo() {
   const studentId = prompt("Enter a student ID: ");
   const foundStudent = db.find((student) => student._id === studentId);

   if (!studentId) {
      console.log("Invalid ID.");
      return;
   }

   if (!foundStudent) {
      console.log("Student not found.");
      return;
   }

   const name = prompt("Enter a name: ");
   const age = +prompt("Enter an age: ");
   const phone = prompt("Enter a phone number: ");
   const major = prompt("Enter a major: ");
   const profession = prompt("Enter a profession: ");
   const groupName = prompt("Enter a group name: ");
   const room = prompt("Enter a room: ");

   const obj = {
      name: name,
      age: age,
      phone: phone,
      major: major,
      profession: profession,
      groupName: groupName,
      room: room,
   };

   db = db.map((student) =>
      student._id === studentId ? { ...student, ...obj } : student
   );

   displayStudentsInfo();
}

// #5 addStudent
function addStudent() {
   let name = prompt("Enter a name: ");
   while (!name.length) {
      name = prompt("Enter a name: ");
   }

   let age = +prompt("Enter an age: ");
   while (age < 15) {
      console.log("Ege must be at least 15 years old.");
      age = +prompt("Enter an age: ");
   }

   let gender = prompt("Enter a gender(male/female): ");
   while (!["male", "female"].includes(gender)) {
      console.log("Gender must be male or female.");
      gender = prompt("Enter a gender: ");
   }

   let phone = prompt("Enter a phone number: ");
   while (phone.length < 16) {
      console.log("Phone number must be at least 16 digits.");
      phone = prompt("Enter a phone number: ");
   }

   let major = prompt(
      "Enter a major(backend/frontend/smm/graphicDesign): "
   ).toLowerCase();
   while (!["backend", "frontend", "smm", "graphicDesign"].includes(major)) {
      console.log("Major must be backend, frontend, smm or graphicDesign.");
      major = prompt("Enter a major(backend/frontend/smm/graphicDesign): ");
   }

   let profession = prompt("Enter a profession: ").toLowerCase();
   while (
      !["javascript", "node js", "java", "python", ".net"].includes(profession)
   ) {
      console.log("Profession must be javascript, node js, java or python.");
      profession = prompt("Enter a profession: ").toLowerCase();
   }

   let groupName = prompt("Enter a group name: ").toLowerCase();
   while (!groupName.length) {
      groupName = prompt("Enter a group name: ").toLowerCase();
   }

   const room = prompt(
      "Enter a room(facebook/github/twitter/apple/youtube/netflix): "
   ).toLowerCase();
   while (
      ![
         "facebook",
         "github",
         "twitter",
         "apple",
         "youtube",
         "netflix",
      ].includes(room)
   ) {
      console.log(
         "Room must be facebook, github, twitter, apple, youtube or netflix."
      );
      room = prompt(
         "Enter a room(facebook/github/twitter/apple/youtube/netflix): "
      ).toLowerCase();
   }

   let erpUsername = prompt("Enter a ERP username: ");
   while (!erpUsername.length) {
      erpUsername = prompt("Enter a ERP username: ");
   }

   let erpPassword = prompt("Enter a ERP password: ");
   while (!erpPassword.length) {
      erpPassword = prompt("Enter a ERP password: ");
   }

   const erpProfileImage = prompt("Enter a ERP profile image: ");
   while (!erpProfileImage.length) {
      erpProfileImage = prompt("Enter a ERP profile image: ");
   }

   const newStudent = {
      _id: String(db.length + 1),
      name,
      age,
      gender,
      phone,
      major,
      profession,
      groupName,
      room,
      lessons: [],
      erpInfo: {
         username: erpUsername,
         password: erpPassword,
         profileImage: erpProfileImage,
      },
   };

   // db.push(newStudent)
   db = [...db, newStudent];

   displayStudentsInfo();
}

// #6 addLesson
function addLesson() {
   let lessonName = prompt("Enter lesson name: ");
   while (!lessonName.length) {
      lessonName = prompt("Enter lesson name: ");
   }

   let date = prompt("Enter date: ");
   while (!date.length) {
      date = prompt("Enter date: ");
   }

   let task1 = prompt("Enter task1: ");
   while (!task1.length) {
      task1 = prompt("Enter task1: ");
   }

   let task2 = prompt("Enter task2: ");
   while (!task2.length) {
      task2 = prompt("Enter task2: ");
   }

   let task3 = prompt("Enter task3: ");
   while (!task3.length) {
      task3 = prompt("Enter task3: ");
   }

   const newLesson = {
      lessonId: "1",
      date: date,
      lessonName: lessonName,
      late: true,
      absent: false,
      tasks: [
         { task_name: task1, completed: false },
         { task_name: task2, completed: false },
         { task_name: task3, completed: false },
      ],
   };

   db = db.map((student) => ({
      ...student,
      lessons: [...student.lessons, newLesson],
   }));
}

// #7 changeERPInfo
function changeERPInfo() {
   const getIds = () => db.map((student) => student._id).join("/");

   const studentId = prompt(`Enter a student ID(${getIds()}): `);
   const foundStudent = db.find((student) => student._id === studentId);

   if (!foundStudent) {
      console.log("Student not found.");
      return;
   }

   let erpUsername = prompt("Enter a ERP username: ");
   while (!erpUsername.length) {
      erpUsername = prompt("Enter a ERP username: ");
   }

   let erpPassword = prompt("Enter a ERP password: ");
   while (!erpPassword.length) {
      erpPassword = prompt("Enter a ERP password: ");
   }

   let erpProfileImage = prompt("Enter a ERP profile image: ");
   while (!erpProfileImage.length) {
      erpProfileImage = prompt("Enter a ERP profile image: ");
   }

   db = db.map((student) =>
      student._id === studentId
         ? {
              ...student,
              erpInfo: {
                 ...student.erpInfo,
                 erpUsername,
                 erpPassword,
                 erpProfileImage,
              },
           }
         : student
   );
}

// displayStudentsInfo();
// removeStudent();
// updateStudentInfo();
// addStudent();
// addLesson();
// changeERPInfo();

// #8
function start() {
   let option = prompt(
      "1 - Talabalar ro'yhati\n2 - Yangi tabaqani royhatga olish\n3 - Talabani ro'yhatdan chiqarish\n4 - Talabaning ma'lumotlarini tahrirlash\n5 - Talabaning ERP ma'lumotlarini o'zgartirish\n\n0 - Dasturdan chiqish\n: "
   );
}

start();
