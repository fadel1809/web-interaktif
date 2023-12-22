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

var video = document.getElementById("myVideo");
var button = document.getElementById("toggleButton");

function toggleVideo() {
  if (video.paused) {
    video.play();
    button.innerHTML = "<i class='fas fa-pause'></i>";
    button.style.display = "none";
  } else {
    video.pause();
    button.innerHTML = "<i class='fas fa-play'></i>";
    button.style.display = "block";
  }
}

video.addEventListener("ended", function () {
  // Jika video selesai, reset tampilan tombol
  button.innerHTML = "<i class='fas fa-play'></i>";
  button.style.display = "block";
});

video.addEventListener("pause", function () {
  button.innerHTML = "<i class='fas fa-pause'></i>";
  button.style.display = "block";
});

video.addEventListener("click", function () {
  toggleVideo();
});
