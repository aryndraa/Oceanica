// navbar
document.getElementById("menu-toggle").addEventListener("click", function () {
  var menu = document.getElementById("menu");
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});

document.getElementById("materi-toggle").addEventListener("click", function () {
  var dropdown = document.getElementById("materi-dropdown");
  dropdown.classList.toggle("hidden");
});

document
  .getElementById("services-toggle-mobile")
  .addEventListener("click", function () {
    var dropdown = document.getElementById("services-dropdown-mobile");
    dropdown.classList.toggle("hidden");
  });

window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  var dropdown = document.getElementById("materi-dropdown");
  if (window.scrollY > 100) {
    navbar.classList.remove("bg-white");
    navbar.classList.add("bg-font");
    dropdown.classList.remove("bg-white");
    dropdown.classList.add("bg-font");
  } else {
    navbar.classList.remove("bg-font");
    navbar.classList.add("bg-white");
    dropdown.classList.remove("bg-font");
    dropdown.classList.add("bg-white");
  }
});

// title
const title = document.getElementById("OceanicaTitle");
const fish = document.querySelector(".fish");
const l1 = document.querySelector(".layer2");
const l2 = document.querySelector(".layer1");
window.addEventListener("scroll", function () {
  let value = window.scrollY;
  title.style.marginTop = value * 1.1 + "px";
  //   let newOpacity = 1 - value / 330;
  //   title.style.opacity = newOpacity < 0 ? 0 : newOpacity;
  fish.style.marginLeft = value * 0.8 + "px";

  l1.style.marginBottom = -value * 0.6 + "px";
  l2.style.marginBottom = -value * 0.8 + "px";
});

const scrollLeftBtn = document.getElementById("scroll-left-btn");
const scrollRightBtn = document.getElementById("scroll-right-btn");
const scrollContainer = document.querySelector(".scrollable-list");

scrollLeftBtn.addEventListener("click", function () {
  scrollContainer.scrollBy({
    left: -220,
    behavior: "smooth",
  });
});

// Fungsi untuk menggeser ke kanan
scrollRightBtn.addEventListener("click", function () {
  scrollContainer.scrollBy({
    left: 220,
    behavior: "smooth",
  });
});

// open content
function openBox(boxId) {
  const overlay = document.getElementById("blocked");
  const boxContainer = document.getElementById(boxId);
  if (boxContainer.classList.contains("hidden")) {
    boxContainer.classList.remove("hidden");
    overlay.classList.remove("hidden");
    boxContainer.classList.add("block");
    overlay.classList.add("block");
    document.body.classList.add("overflow-hidden");
  } else {
    boxContainer.classList.remove("block");
    boxContainer.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }
}

// close content
function closeBox(boxId) {
  const overlay = document.getElementById("blocked");

  const boxContainer = document.getElementById(boxId);
  boxContainer.classList.remove("block");
  overlay.classList.remove("block");
  boxContainer.classList.add("hidden");
  overlay.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
}
