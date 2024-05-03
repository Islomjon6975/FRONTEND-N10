let groceryList = ["go'sht", "yog'", "guruch"];

let product = prompt(
   "1 - display\n2 - adding\n3 - removing\n4 - updating\n\n0 - Exit: "
);
// groceryList.push(product);

function displayGroceryList() {
   console.log("Olinishi kerak bo'lgan narsalar:");
   for (let i = 0; i < groceryList.length; i++) {
      console.log(`${i + 1}. ${groceryList[i]}`);
   }
}

displayGroceryList();

// Olinishi kerak bo'lgan mahsulotlar:
// 1. go'sht
// 2. yog'
// 3. guruch
