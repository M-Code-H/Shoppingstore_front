// سكرول نافبار

window.addEventListener("scroll", function () {
  var navbar = document.querySelector("header");
  navbar.classList.toggle("sticky", window.scrollY > 0);
});
window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".yyy");
  navbar.classList.toggle("sticky", window.scrollY > 0);
});

// div input بحث

// slider

// Access the Images
let slideImages = document.querySelectorAll(".text");
// Access the next and prev buttons
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
// Access the indicators
let dots = document.querySelectorAll(".dot");

var counter = 0;

// Code for next button
next.addEventListener("click", slideNext);
function slideNext() {
  slideImages[counter].style.animation = "next1 0.5s ease-in forwards";
  if (counter >= slideImages.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  slideImages[counter].style.animation = "next2 0.5s ease-in forwards";
  indicators();
}

// Code for prev button
prev.addEventListener("click", slidePrev);
function slidePrev() {
  slideImages[counter].style.animation = "prev1 0.5s ease-in forwards";
  if (counter == 0) {
    counter = slideImages.length - 1;
  } else {
    counter--;
  }
  slideImages[counter].style.animation = "prev2 0.5s ease-in forwards";
  indicators();
}

// Auto slideing
function autoSliding() {
  deletInterval = setInterval(timer, 10000);
  function timer() {
    slideNext();
    indicators();
  }
}
autoSliding();

// Stop auto sliding when mouse is over
const container = document.querySelector(".slide-container");
container.addEventListener("mouseover", function () {
  clearInterval(deletInterval);
});

// Resume sliding when mouse is out
container.addEventListener("mouseout", autoSliding);

// slider img
var iconL = document.getElementById("icL");
var iconR = document.getElementById("icR");
var sl1 = document.getElementById("sli1");
var sl2 = document.getElementById("sli2");
iconR.onclick = function () {
  sl1.style.display = "none";
  sl2.style.display = "flex";
};
iconL.onclick = function () {
  sl1.style.display = "flex";
  sl2.style.display = "none";
};
