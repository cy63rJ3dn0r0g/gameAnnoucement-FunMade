var countDown = new Date("04-20-2023 00:00:00").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDown - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
});
// function audioAP() {
//   document.getElementById("audio").muted = true;

// }
// audioAP();

const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const toggle = player.querySelector(".toggle");
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
toggle.addEventListener("click", togglePlay);

const skipButton = document.getElementById("skip");
skipButton.addEventListener("click", function (e) {
  video.play();
  video.currentTime = video.duration;
});

const ending = document.getElementById("video");
ending.addEventListener("ended", endVideo, false);
function endVideo(e) {
  if (!e) {
    e = window.event;
  }
  function blackScreen() {
    document.getElementById("endVid").style.display = "block";
  }
  function cd() {
    document.getElementById("countDown").style.opacity = "1";
  }
  blackScreen();
  cd();
}
