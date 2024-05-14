// #1

let shop = JSON.parse(localStorage.getItem("shop"))
   ? JSON.parse(localStorage.getItem("shop"))
   : [
        { _id: 1, name: "Pen", color: ["blue", "red", "black"], price: 2000 },
        {
           _id: 2,
           name: "Pencil",
           color: ["blue", "red", "black"],
           price: 3000,
        },
        { _id: 3, name: "paper", color: ["blue", "red", "black"], price: 4000 },
        {
           _id: 4,
           name: "notebook",
           color: ["blue", "red", "black"],
           price: 5000,
        },
        { _id: 5, name: "book", color: ["blue", "red", "black"], price: 6000 },
     ];

localStorage.setItem("shop", JSON.stringify(shop));

function setLocalStorage() {
   localStorage.setItem("shop", JSON.stringify(shop));
}

function displayProducts(db = shop) {
   db.forEach((item, index) => {
      console.log(`${item._id}. ${item.name} - ${item.color} - $${item.price}`);
   });
}

function addProduct() {
   const newProduct = {
      _id: shop.length + 1,
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
   const product = "book";
   product.toLowerCase();

   const result = shop.filter((item) =>
      item.name.toLowerCase().includes(product)
   );

   displayProducts(result);
}

function totalPrice() {
   const result = shop.reduce((sum, item) => sum + item.price, 0);

   console.log(`Total price: $${result}`);
}

// addProduct();
// updateProduct();
// removeProduct();
// searchProduct();
// totalPrice();
// displayProducts();

// DRY -> Don't Repeat Yourself
