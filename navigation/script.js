document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btn");
  const tam = document.getElementById("tam");
  btn.addEventListener("click", function () {
    tam.classList.toggle("show");

    let laptop = window.matchMedia("(max-width: 601px)");
    window.onresize = () => {
      if (laptop.matches) {
        tam.classList.toggle("show");
      } else {
        tam.classList.remove("show");
      }
    };
  });
});
