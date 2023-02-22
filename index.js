var hamburger = document.querySelector(".menu-button");
hamburger.addEventListener("click", function() {
	document.querySelector(".navigation").classList.toggle("nav-list-opened");
}, false);

var email = document.getElementById("mail");

email.addEventListener("keyup", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Enter a correct email address!");
  } else {
    email.setCustomValidity("");
  }
});
