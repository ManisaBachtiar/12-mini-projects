const reviews = [
    {
      img: 'img/img1.jpg',
      name: 'Ara ara',
      teks: 'Meet Nisa, a coding prodigy breaking stereotypes in the tech world. Her programming prowess is unmatched, and she effortlessly crafts elegant solutions'
    },
    {
      img: 'img/img2.jpg',
      name: 'Elgata',
      teks: 'Nisa is not just a skilled programmer she is a coding virtuoso. Her ability to turn intricate algorithms into seamless applications is nothing short of remarkable'
    },
    {
        img: 'img/img3.jpg',
        name: 'Andini',
        teks: 'In the world of programming, Nisa stands out as a brilliant mind. Her code is not just functional; it is a work of art.'
      },
      {
        img: 'img/img4.jpg',
        name: 'Areta',
        teks: 'Meet the coding queen, Nisa, who navigates through lines of code with grace and precision.'
      }
  ];
const img = document.getElementById("img");
const name = document.getElementById("name");
const text = document.getElementById("text");
const btnNext = document.getElementById("btnNext");
const btnPrev = document.getElementById("btnPrev");

let current = 0;
window.addEventListener("DOMContentLoaded", function(){
    show(current);
})
function show(){
    const item = reviews[current];
    console.log(item)
    img.src =item.img;
    name.textContent= item.name;
    text.textContent= item.teks;
    
}
btnNext.addEventListener("click", function(){
    current++;
    if(current > reviews.length-1){
    current = 0;
    }
    show();
});
btnPrev.addEventListener("click", function(){
    current--;
    if(current > reviews.length-1){
    
    }
    show();
});