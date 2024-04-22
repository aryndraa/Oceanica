const scrollLeftBtn = document.getElementById("scroll-left-btn");
const scrollRightBtn = document.getElementById("scroll-right-btn");
const scrollContainer = document.querySelector(".scrollable-list");

scrollLeftBtn.addEventListener("click", function () {
  scrollContainer.scrollBy({
    left: -220, // Sesuaikan dengan jumlah pixel yang ingin digeser
    behavior: "smooth", // Animasi scrolling
  });
});

// Fungsi untuk menggeser ke kanan
scrollRightBtn.addEventListener("click", function () {
  scrollContainer.scrollBy({
    left: 220, // Sesuaikan dengan jumlah pixel yang ingin digeser
    behavior: "smooth", // Animasi scrolling
  });
});
