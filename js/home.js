let logOutBtn = document.getElementById("logOutBtn");
let welcomeUser = document.getElementById("userName");
let userName = localStorage.getItem("userName");


if (userName) {
  welcomeUser.innerHTML = "Welcome " + userName;
} else {
  window.location.href = "index.html";
}
logOutBtn.addEventListener("click", function () {
 
  localStorage.removeItem("userName");
  window.location.href = "index.html";

  // Disable back navigation
  history.pushState(null, null, window.location.href);
  window.onpopstate = function () {
    history.go(1);
  };
});
