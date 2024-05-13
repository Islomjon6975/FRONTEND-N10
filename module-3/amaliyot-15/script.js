// Malumotlar bazasini yaratish kerak (constructor funksiya).
// 1. malumotlarni render qilish
// 2. malumot qo'shish kerak
// 3. malumot update qilish
// 4. malumotni o'chirish kerak
// 5. email va passwordni render qiladigan. bunda password hashlangan bo'lishi kerak.

function User() {
   this.db = [
      {
         _id: 1,
         name: "Jack",
         age: 25,
         email: "jack@gmail.com",
         password: "1234",
      },
      {
         _id: 2,
         name: "Jane",
         age: 19,
         email: "jane@gmail.com",
         password: "123",
      },
      {
         _id: 3,
         name: "Bob",
         age: 21,
         email: "bob@gmail.com",
         password: "123",
      },
   ];

   this.displayUsers = function () {
      this.db.forEach((element, index) => {
         console.log(`${index + 1}. ${element.name} - ${element.age} `); // 1. Jack - 25 yosh - jack@gmail.com - ****
      });
   };

   this.displayUserLoginInfo = function () {
      this.db.forEach((element, index) => {
         console.log(
            `${index + 1}. ${element.email} - ${element.password.replace(
               /./g,
               "*"
            )}`
         );
      });
   };

   this.addUser = function () {
      const newUser = {
         _id: this.db.length + 1,
         name: "Sindor",
         age: 19,
         email: "sindor@gmail.com",
         password: "123",
      };

      // this.db.push(newUser)
      this.db = [...this.db, newUser];
   };

   this.updateUser = function () {};

   this.removeUser = function () {};
}

const user = new User();

// user.displayUserLoginInfo();
user.updateUser();
user.displayUsers();
