window.onscroll = function() {func_navbar()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function func_navbar() {
  if(windowPageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
