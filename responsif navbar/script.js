document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("btn");
    const tam = document.getElementById("tam");
    tam.classList.add('none');
    btn.addEventListener("click", function () {
      tam.classList.toggle("none");
      
    });
    
    var laptop = window.matchMedia("(min-width: 601px)")
    
    window.onresize = () => {
      if(laptop.matches){
       console.log("AKU DI DESKTOP")
        tam.classList.remove("none")
      } else {
        console.log("AKU DI MOBILE")
        tam.classList.add("none")
      }; 
    }
    
  });