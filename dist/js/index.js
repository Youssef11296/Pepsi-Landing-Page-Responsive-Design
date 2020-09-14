// Cash The Main Elements
const can = document.getElementById("img");
const icon = document.getElementById("icon");
const menu = document.querySelector("header nav ul");

// Change The Img
const change = (e, bg) => {
  can.src = e;
  document.body.style.backgroundColor = bg;
};

// Toggle The Menu
const toggle = () => {
  menu.classList.toggle("active");
  icon.classList.toggle("invert");
};
