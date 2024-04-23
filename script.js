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
