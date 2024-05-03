var loginBtn = document.getElementById("login-btn");
var authModal = document.getElementById("auth-modal");
var loginForm = document.getElementById("login-form");

loginBtn.addEventListener("click", function () {
   authModal.style.display = "flex";
});

loginForm.addEventListener("click", function () {
   authModal.style.display = "none";
});

//     authModal.addEventListener("click", function () {
//        authModal.style.display = "none";
//     });
