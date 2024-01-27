function togglePlayPause() {
  let button = document.querySelector(".play-pause-button");
  button.classList.toggle("pause");
  button.innerText = button.classList.contains("pause") ? "Pause" : "Play";
  let video = document.querySelector(".vid");
  if (button.classList.contains("pause")) {
    video.play();
  } else {
    video.pause();
  }
}
