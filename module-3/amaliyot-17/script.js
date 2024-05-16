// #1

let shop = JSON.parse(localStorage.getItem("shop"))
   ? JSON.parse(localStorage.getItem("shop"))
   : [
        { _id: "1", name: "Pen", color: ["blue", "red", "black"], price: 2000 },
        {
           _id: "2",
           name: "Pencil",
           color: ["blue", "red", "black"],
           price: 3000,
        },
        {
           _id: "3",
           name: "paper",
           color: ["blue", "red", "black"],
           price: 4000,
        },
        {
           _id: "4",
           name: "notebook",
           color: ["blue", "red", "black"],
           price: 5000,
        },
        {
           _id: "5",
           name: "book",
           color: ["blue", "red", "black"],
           price: 6000,
        },
     ];

localStorage.setItem("shop", JSON.stringify(shop));

function setLocalStorage() {
   localStorage.setItem("shop", JSON.stringify(shop));
}

function displayProducts(db = shop) {
   console.log("Mahsulotlar ro'yhati");
   db.forEach((item, index) => {
      console.log(`${item._id}. ${item.name} - ${item.color} - $${item.price}`);
   });
}

function addProduct() {
   const newProduct = {
      _id: String(shop.length + 1),
      name: "Copybook",
      color: ["black"],
      price: 10000,
   };

   shop = [...shop, newProduct];
   setLocalStorage();
}

function updateProduct() {
   const productID = 1;

   shop = shop.map((product) =>
      product._id === productID
         ? {
              ...product,
              price: 50000,
              name: "Book 2",
           }
         : product
   );

   setLocalStorage();
}

function removeProduct() {
   const productID = 2;

   shop = shop.filter((product) => product._id !== productID);

   setLocalStorage();
}

function searchProduct() {
   let option = prompt(
      "Siz nima boyicha search qilmoqchisiz (ID/name): "
   ).toLowerCase();

   while (!["name", "id"].includes(option)) {
      alert("Siz faqat name va id ni kiritishingiz mumkin!");
      option = prompt("Siz nima boyicha search qilmoqchisiz (ID/name): ");
   }

   let name;
   let id;
   let result;
   if (option === "name") {
      name = prompt(`${option} ni kiritin`);
      name.toLowerCase();
      result = shop.filter((item) => item.name.toLowerCase().includes(name));
   } else if (option === "id") {
      id = +prompt(`${option} ni kiritin`);
      result = shop.filter((item) => item._id.includes(id));
   }

   displayProducts(result);
}

function totalPrice() {
   const result = shop.reduce((sum, item) => sum + item.price, 0);

   console.log(`Total price: $${result}`);
}

function start() {
   let isTrue = true;
   let option;
   while (isTrue) {
      option = prompt(
         "1 - Mahsulotlar ro'yhati\n2 - Mahsulotni izlash\n3 - Mahsulot qo'shish\n4 - Mahsulotni tahrirlash\n5 - Mahsulotni o'chirish\n6 - Mahsulotni umumiy narxi\n\n0 - Dasturdan chiqish"
      );
      switch (option) {
         case "1": {
            displayProducts();
            break;
         }
         case "2": {
            searchProduct();
            break;
         }
         case "0": {
            console.log("Dasturdan chiqildi");
            isTrue = false;
            break;
         }
         default: {
            alert("1/2/3/4/5/6/0 shulardan birini kiritishingiz mumkin!");
         }
      }
   }
}

start();

// DRY -> Don't Repeat Yourself
