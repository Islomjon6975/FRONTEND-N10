// 1. DB
// 2. Rendering DB -> ma'lumotlarni ekranga chiqarib beradi. +
// 3. Adding new student -> yangi kelgan o'quvchini kursga qo'shish +
// 4. Updating student -> student malumotlarini yangilash +
// 5. Removing student -> o'quvchi ma'lumotlar bazasidan chiqarish +
// 6. Updating WiFi login info
// 7. Total income -> displayIncome

// #1
let db = [
   {
      _id: 1,
      name: "Jack Smith",
      age: 20,
      major: "Frontend",
      faculty: "BootCamp Frontend",
      groupName: "N10",
      payment: 100,
      duration: 8,
      dailyHours: 4,
      gender: "male",
      studentAddress: {
         city: "Qashqadaryo",
         street: "Shahriyev",
         district: "Qarshi",
      },
      studentPhone: {
         countryCode: "994",
         number: "555555555",
      },
      address: {
         city: "Tashkent",
         district: "Chilonzor",
      },
      wifiInfo: {
         username: "Jack",
         password: "123",
      },
   },
   {
      _id: 2,
      name: "Alex Smith",
      age: 30,
      major: "Frontend",
      faculty: "BootCamp Frontend",
      groupName: "N15",
      payment: 100,
      duration: 8,
      dailyHours: 4,
      gender: "male",
      studentAddress: {
         city: "Qashqadaryo",
         street: "Shahriyev",
         district: "Qarshi",
      },
      studentPhone: {
         countryCode: "994",
         number: "555555555",
      },
      address: {
         city: "Tashkent",
         district: "Chilonzor",
      },

      wifiInfo: {
         username: "alex",
         password: "1234",
      },
   },
   {
      _id: 3,
      name: "Mark Smith",
      age: 30,
      major: "Frontend",
      faculty: "BootCamp Frontend",
      groupName: "N15",
      payment: 100,
      duration: 8,
      dailyHours: 4,
      gender: "male",
      studentAddress: {
         city: "Qashqadaryo",
         street: "Shahriyev",
         district: "Qarshi",
      },
      studentPhone: {
         countryCode: "994",
         number: "555555555",
      },
      address: {
         city: "Tashkent",
         district: "Chilonzor",
      },
      wifiInfo: {
         username: "mark",
         password: "123",
      },
   },
];

// #2
function displayDB(students = db) {
   if (!students.length) {
      console.log("Birorta ham ma'lumot topilmadi!");
      return;
   }

   students.forEach((student, index) => {
      console.log(
         `${index + 1}. ${student.name} - ${student.faculty} - ${
            student.groupName
         } - $${student.payment} - ${student.wifiInfo.username} - ${
            student.wifiInfo.password
         }`
      );
   });
}

// #3
function addingStudent() {
   const newStudent = {
      _id: db.length + 1,
      name: "Sindor O'lmasov",
      age: 19,
      major: "Frontend",
      faculty: "BootCamp Frontend",
      groupName: "N10",
      payment: 100,
      duration: 8,
      dailyHours: 4,
      gender: "male",
      studentAddress: {
         city: "Samarqand",
         street: "Kamondon",
         district: "Urgut",
      },
      studentPhone: {
         countryCode: "+99899",
         number: "8888888",
      },
      address: {
         city: "Tashkent",
         district: "Chilonzor",
      },
      wifiInfo: {
         username: "Sindor",
         password: "123",
      },
   };

   // db.push(newStudent);
   db = [...db, newStudent];

   displayDB();
}

// #4
function updatingStudentInfo() {
   const studentID = 1;

   db = db.map((student) =>
      student._id === studentID
         ? {
              ...student,
              name: "Mark Smith",
              faculty: "BootCamp Backend",
              groupName: "N20",
              payment: 150,
           }
         : student
   );

   displayDB();
}

// #5
function removeStudent() {
   const studentID = 3;

   db = db.filter((student) => student._id !== studentID);
   displayDB();
}

// #6
function changingStudentWifiInfo() {
   const studentID = 3;

   db = db.map((student) =>
      student._id === studentID
         ? {
              ...student,
              wifiInfo: {
                 ...student.wifiInfo,
                 username: "Mark",
                 password: 12345,
              },
           }
         : student
   );

   displayDB();
}

// #7
function displayIncomeInfo() {
   const total = db.reduce((sum, student) => sum + student.payment, 0);

   console.log(`Total Income: $${total}.`);
}

// displayDB();
// addingStudent();
// updatingStudentInfo();
// removeStudent();
// changingStudentWifiInfo();
// displayIncomeInfo();
