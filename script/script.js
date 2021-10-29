"use strict";

const btnScrollTo = document.querySelectorAll(".btn--scroll-to");
console.log(btnScrollTo);

document
  .querySelector(".main-nav-list")
  .addEventListener("click", function (e) {
    e.preventDefault();

    // Matching strategy
    if (e.target.classList.contains("main-nav-link")) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });

for (let i = 0; i < btnScrollTo.length; i++) {
  btnScrollTo[i].addEventListener("click", function (e) {
    e.preventDefault();

    if (e.target.classList.contains("btn")) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });
}
