// 1. DB
// 2. Rendering DB -> ma'lumotlarni ekranga chiqarib beradi. +
// 3. Adding new student -> yangi kelgan o'quvchini kursga qo'shish +
// 4. Updating student -> student malumotlarini yangilash +
// 5. Removing student -> o'quvchi ma'lumotlar bazasidan chiqarish +
// 6. Updating WiFi login info
// 7. Total income -> displayIncome
// 8. ERP Student Info
// 9. The number of student silver
//

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
      erpInfo: {
         username: "jack",
         password: "1233",
         image: "http://images/jack.png",
      },
      lessons: [
         {
            _id: "1-1",
            lessonName: "HTML",
            lessonHours: 4,
            isAbsent: true,
            isLate: false,
            gamification: {
               xp: 4,

               silver: 4,
            },
         },
         {
            _id: "1-2",
            lessonName: "HTML 2",
            lessonHours: 4,
            isAbsent: true,
            isLate: false,
            gamification: {
               xp: 3,
               silver: 4,
            },
         },
         {
            _id: "1-3",
            lessonName: "HTML 3",
            lessonHours: 4,
            isAbsent: false,
            isLate: false,
            gamification: {
               xp: 0,
               silver: 4,
            },
         },
      ],
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
      erpInfo: {
         username: "alex",
         password: "1233",
         image: "http://images/alex.png",
      },
      lessons: [
         {
            _id: "1-1",
            lessonName: "HTML",
            lessonHours: 4,
            isAbsent: true,
            isLate: !this.isAbsent ? true : false,
            gamification: {
               xp:
                  this.isAbsent && !this.isLate
                     ? 3
                     : this.isAbsent && this.isLate
                     ? 2
                     : 0,

               silver: this.xp * 4,
            },
         },
         {
            _id: "1-2",
            lessonName: "HTML 2",
            lessonHours: 4,
            isAbsent: true,
            isLate: !this.isAbsent ? true : false,
            gamification: {
               xp:
                  this.isAbsent && !this.isLate
                     ? 3
                     : this.isAbsent && this.isLate
                     ? 2
                     : 0,
            },
         },
         {
            _id: "1-3",
            lessonName: "HTML 3",
            lessonHours: 4,
            isAbsent: false,
            isLate: !this.isAbsent ? true : false,
            gamification: {
               xp:
                  this.isAbsent && !this.isLate
                     ? 3
                     : this.isAbsent && this.isLate
                     ? 2
                     : 0,
            },
         },
      ],
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
      erpInfo: {
         username: "mark",
         password: "1233",
         image: "http://images/mark.png",
      },
      lessons: [
         {
            _id: "1-1",
            lessonName: "HTML",
            lessonHours: 4,
            isAbsent: true,
            isLate: !this.isAbsent ? true : false,
            gamification: {
               xp:
                  this.isAbsent && !this.isLate
                     ? 3
                     : this.isAbsent && this.isLate
                     ? 2
                     : 0,

               silver: this.xp * 4,
            },
         },
         {
            _id: "1-2",
            lessonName: "HTML 2",
            lessonHours: 4,
            isAbsent: true,
            isLate: !this.isAbsent ? true : false,
            gamification: {
               xp:
                  this.isAbsent && !this.isLate
                     ? 3
                     : this.isAbsent && this.isLate
                     ? 2
                     : 0,
            },
         },
         {
            _id: "1-3",
            lessonName: "HTML 3",
            lessonHours: 4,
            isAbsent: false,
            isLate: !this.isAbsent ? true : false,
            gamification: {
               xp:
                  this.isAbsent && !this.isLate
                     ? 3
                     : this.isAbsent && this.isLate
                     ? 2
                     : 0,
            },
         },
      ],
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
      erpInfo: {
         username: "jack",
         password: "1233",
         image: "http://images/jack.png",
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

// #8
function changingStudentERPInfo() {
   const studentID = 1;

   db = db.map((student) =>
      student._id === studentID
         ? {
              ...student,
              erpInfo: {
                 ...student.erpInfo,
                 image: "https://image/Jack.png",
              },
           }
         : student
   );

   displayDB();
}

// #9
function totalNumberOfStudentSilver() {
   const studentID = 1;

   const foundStudent = db.find((student) => student._id === studentID);
   console.log(foundStudent);
   const totalSilver = foundStudent.lessons.reduce(
      (sum, lesson) => sum + lesson.gamification.silver,
      0
   );

   console.log(`${foundStudent.name} ning jami kumushlar soni ${totalSilver}.`);
}

// displayDB();
// addingStudent();
// updatingStudentInfo();
// removeStudent();
// changingStudentWifiInfo();
// displayIncomeInfo();
totalNumberOfStudentSilver();
