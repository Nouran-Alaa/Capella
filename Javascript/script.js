"use stict";

//Scroll Event Listener
window.addEventListener("scroll", function () {
  //Variables
  const burgerLine = document.getElementsByClassName("line");
  const imagelogo = document.getElementById("logo-img");
  const navbar = document.getElementById("navbar");
  let links = navbar.getElementsByTagName("a");

  if (window.scrollY > 200) {
    navbar.style.backgroundColor = "white";

    navbar.style["boxShadow"] = "2px 4px 10px rgba(0, 0, 0, 0.212)";

    imagelogo.src = "/img/logo@2x.jpeg";

    for (let i = 0; i < burgerLine.length; i++) {
      burgerLine[i].style.backgroundColor = "black";
    }

    for (let i = 0; i < links.length; i++) {
      links[i].style.color = "black";
    }
  } else {
    navbar.style.backgroundColor = "transparent";

    navbar.style["boxShadow"] = "none";

    for (let i = 0; i < burgerLine.length; i++) {
      burgerLine[i].style.backgroundColor = "white";
    }

    imagelogo.src = "/img/logo.png";

    for (let i = 0; i < links.length; i++) {
      links[i].style.color = "white";
    }
  }
});

//Burger Menu toggle
function toggleMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  const burger = document.getElementById("burger");
  if (mobileMenu.classList.contains("active")) {
    mobileMenu.classList.remove("active");
    burger.classList.remove("hidden");
  } else {
    mobileMenu.classList.add("active");
    burger.classList.add("hidden");
  }
}

//Slider
let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }
  const offset = -currentSlide * 100;
  document.querySelector(".slides").style.transform = `translateX(${offset}%)`;
}

function moveSlide(step) {
  showSlide(currentSlide + step);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlide);
  setInterval(() => {
    moveSlide(1);
  }, 20000);
});
