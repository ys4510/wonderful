"use strict";

{
  const btnMenu = document.getElementById("btn-menu");
  const spMenu = document.querySelector("#sp-menu");
  const header = document.querySelector("header");
  const letters = document.querySelectorAll(".effect");
  const topLogo = document.getElementById("topLogo");
  const btnRequest = document.getElementById("btnRequest");
  const email = document.getElementById("email");

  // Changing the color of the navbar on scrolling
  // var ScrollPos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos < 50) {
      document.querySelector("header").classList.remove("scrolling");
    } else {
      document.querySelector("header").classList.add("scrolling");
    }
  };

  topLogo.addEventListener("click", (e) => {
    // e.preventDefault();
    // location.href = "#";
    location.href = "./index.html";
  });

  btnMenu.addEventListener("click", () => {
    if (spMenu.classList.contains("hidden")) {
      spMenu.classList.remove("hidden");
      header.classList.add("withMenu");
      btnMenu.innerHTML = '<i class="bi bi-x"></i>';
    } else {
      spMenu.classList.add("hidden");
      header.classList.remove("withMenu");
      btnMenu.innerHTML = '<i class="bi bi-list border-0"></i>';
    }
  });

  // showing shop name one letter by one letter
  window.onload = function () {
    letters.forEach((letter) => {
      letter.classList.remove("hidden");
    });
  };

  // validation check for customer email in reservation request form
  btnRequest.addEventListener("click", (e) => {
    const emailaddress = email.value;
    if (!emailaddress.match(/.+@.+\..+/)) {
      e.preventDefault();
      document.getElementById("email").classList.add("is-invalid");
    }
  });

  // removing 'invalid' status from email field
  email.addEventListener("keypress", () => {
    if (email.classList.contains("is-invalid")) {
      email.classList.remove("is-invalid");
    }
  });
  email.addEventListener("click", () => {
    if (email.classList.contains("is-invalid")) {
      email.classList.remove("is-invalid");
    }
  });
}
