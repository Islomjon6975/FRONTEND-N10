const user = {
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
      building: "12",
      apartment: "12",
   },
   studentPhone: {
      countryCode: "994",
      number: "555555555",
   },
   address: {
      city: "Tashkent",
      district: "Chilonzor",
   },
};

const { name, age, payment } = user;

console.log(name);
console.log(age);
console.log(payment);
