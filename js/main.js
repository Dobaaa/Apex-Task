// Ensure the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggle-btn");
  const navLinks = document.querySelector(".nav-links");

  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
});

/* dropdown */
const dropdownBtns = document.querySelectorAll(".dropdown-btn");
const dropdowns = document.querySelectorAll(".dropdown");

dropdownBtns.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    dropdowns[index].classList.toggle("show");
  });
});

/* -----------------------------------------*/
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper3 = new Swiper(".mySwiper3", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/* end swiper */

/* start  Scroll-Triggered Animations */
window.addEventListener("scroll", () => {
  const targetElements = document.querySelectorAll(".animated-element"); // All elements with the class
  const targetElementsTwo = document.querySelectorAll(".animated-element-two"); // All elements with the class
  const section = document.getElementById("services"); // Target section

  const sectionTop = section.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight / 1.5; // Activation point

  if (sectionTop < triggerPoint) {
    targetElements.forEach((element) => {
      element.classList.add("animate");
    });
    targetElementsTwo.forEach((element) => {
      element.classList.add("animate");
    });
  } else {
    targetElements.forEach((element) => {
      element.classList.remove("animate");
    });
    targetElementsTwo.forEach((element) => {
      element.classList.remove("animate");
    });
  }
});

/*  start pagination */

const cards = document.querySelectorAll(".pagination-card");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 0;

// Update the active pagination-card
function updateCarousel() {
  cards.forEach((card, index) => {
    card.classList.toggle("active", index === currentIndex);
  });

  // Disable buttons if at the start or end
  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === cards.length - 1;
}

// Navigate to the previous pagination-card
prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

// Navigate to the next pagination-card
nextButton.addEventListener("click", () => {
  if (currentIndex < cards.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});

// Initialize carousel
updateCarousel();

/* end pagination*/
