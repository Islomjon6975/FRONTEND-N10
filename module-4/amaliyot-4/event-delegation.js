// const item1 = document.querySelector("#item-1");
// const item2 = document.querySelector("#item-2");
// const item3 = document.querySelector("#item-3");

// item1.addEventListener("click", function () {
//    console.log(item1.innerText);
// });

// item2.addEventListener("click", function () {
//    console.log(item2.innerText);
// });

// item3.addEventListener("click", function () {
//    console.log(item3.innerText);
// });

// const items = document.querySelectorAll(".item");

// items.forEach((item) => {
//    item.addEventListener("click", function () {
//       console.log(item.innerText);
//    });
// });

// event delegation -> itemlarga bosilganda ularni o'rab turuvchisi orqali amalga oshirish
const list = document.querySelector("#list");

list.addEventListener("click", function (e) {
   console.log(e.target.innerText);
});
