var logo = document.getElementById("logo");
var sidebar = document.getElementById("sidebar");
var closeBtn = document.getElementById("close-btn");
var sidebarLink = document.getElementById("sidebar-links");

console.log(sidebar);

logo.addEventListener("click", function () {
   //    sidebar.style.left = "0px";
   sidebar.classList.toggle("active-sidebar");
});

closeBtn.addEventListener("click", function () {
   sidebar.classList.remove("active-sidebar");
});

sidebarLink.addEventListener("click", function () {
   sidebar.classList.remove("active-sidebar");
});
