let plus = document.getElementsByClassName("plus");
let minus = document.getElementsByClassName("minus");
let answer = document.getElementsByClassName("answer");
let allElements = document.querySelectorAll(".all");

for (let i = 0; i < answer.length; i++) {
  answer[i].classList.toggle("none");
}

for (let i = 0; i < minus.length; i++) {
  minus[i].classList.toggle("none");
}
for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
    let ans = this.parentElement.parentElement.nextElementSibling;
    let min = this.nextElementSibling;
    let prev =
      this.parentElement.parentElement.parentElement.previousElementSibling;
    let next =
      this.parentElement.parentElement.parentElement.ne
    this.classList.toggle("none");
    ans.classList.toggle("none");
    min.classList.toggle("none");
  });
}
for (let i = 0; i < minus.length; i++) {
  minus[i].addEventListener("click", function () {
    let ans = this.parentElement.parentElement.nextElementSibling;
    let plu = this.previousElementSibling;
    this.classList.toggle("none");
    ans.classList.toggle("none");
    plu.classList.toggle("none");
  });
}
