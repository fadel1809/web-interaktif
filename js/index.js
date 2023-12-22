var loader;
function displayLoader() {
  loader.style.display = "block";
  setTimeout(function () {
    displayContent();
  }, 3000);
}

document.addEventListener("DOMContentLoaded", function () {
  loader = document.getElementById("loader");
  displayLoader(); // Panggil fungsi displayLoader
});

function displayContent() {
  loader.style.display = "none";
  document.getElementById("main").style.display = "block";

  // Tampilkan header setelah loader selesai
  var header = document.querySelector(".header");
  header.classList.remove("preload");
}
