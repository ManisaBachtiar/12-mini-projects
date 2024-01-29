let btn = document.querySelectorAll(".btn");
let article = document.querySelectorAll(".article");
let about = document.querySelector(".button2");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  
  if (id) {
    btn.forEach(function (bt) {
      bt.classList.remove("show");
      e.target.classList.add("show");
    });
    article.forEach(function (art) {
      art.classList.remove("show");
    });
    const element = document.getElementById(id);
    element.classList.add("show");
    console.log(element)
  }
});
