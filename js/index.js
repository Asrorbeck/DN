const musicControl = document.getElementById("navbar__btn");
const audio = document.getElementById("background-music");
const musicIcon = document.getElementById("music-icon");

let isPlaying = true;

var modal = document.getElementById("myModal");
var yesBtn = document.getElementById("yesBtn");
var noBtn = document.getElementById("noBtn");

function closeModal() {
  modal.style.display = "none";
}

yesBtn.addEventListener("click", function () {
  audio.muted = false;
  audio.play();
  musicIcon.src = "./img/unmute.svg";
  closeModal();

  isPlaying = !isPlaying;
});

noBtn.addEventListener("click", function () {
  audio.pause();
  musicIcon.src = "./img/mute.svg";
  closeModal();
});

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModal();
  }
});

window.onload = function () {
  modal.style.display = "block";
};

musicControl.addEventListener("click", function () {
  if (isPlaying) {
    audio.muted = false;
    audio.play();
    musicIcon.src = "./img/unmute.svg";
  } else {
    audio.pause();
    musicIcon.src = "./img/mute.svg";
  }

  isPlaying = !isPlaying;
});

const targetDate = new Date("2024-09-30T00:00:00").getTime();

const countdown = setInterval(function () {
  const now = new Date().getTime();
  const timeRemaining = targetDate - now;

  if (timeRemaining <= 0) {
    clearInterval(countdown);
  } else {
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  }
}, 1000);

function toggleMenu() {
  var menu = document.querySelector(".menu");
  var overlay = document.querySelector(".menu-overlay");
  menu.classList.toggle("menu-open");
  overlay.style.display = overlay.style.display === "block" ? "none" : "block";
}

document.getElementById("openMaps").addEventListener("click", function () {
  const address = "Яккасарой Туйхонаси";

  if (/iphone|ipad|ipod/i.test(navigator.userAgent)) {
    // Open Yandex Maps on iOS
    window.location.href = `https://maps.yandex.com/?text=${encodeURIComponent(
      address
    )}`;
  } else if (/android/i.test(navigator.userAgent)) {
    // Open Yandex Navigator on Android
    window.location.href = `https://yandex.com/maps/?text=${encodeURIComponent(
      address
    )}`;
  }
});
