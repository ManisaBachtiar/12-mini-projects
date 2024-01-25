let plus = document.getElementsByClassName('plus')
let minus = document.getElementsByClassName('minus');
let answer = document.getElementsByClassName('answer');
for (var i = 0; i < answer.length; i++) {
   answer[i].classList.add('none')
}
for (var i = 0; i < minus.length; i++) {
    minus[i].classList.add('none')
 }
 for (var i = 0; i < plus.length; i++) {
    plus[i].addEventListener('click', function() {
      var ans = this.parentElement.parentElement.nextElementSibling;
    var min = this.nextElementSibling;
      this.classList.add('none')
      ans.classList.remove('none')
      min.classList.remove('none')
      
    });
  }
  for (var i = 0; i < minus.length; i++) {
    minus[i].addEventListener('click', function() {
      var ans = this.parentElement.parentElement.nextElementSibling;
    var plu = this.previousElementSibling;
      this.classList.add('none')
      ans.classList.add('none')
      plu.classList.remove('none')
      
    });
  }