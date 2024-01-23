document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btn");
  const tam = document.getElementById("tam");

  tam.classList.add("none");
  btn.addEventListener("click", function () {
    tam.classList.toggle("flex");
  });
});
