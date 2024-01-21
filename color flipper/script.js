let btn = document.getElementById('btn');
let body = document.body;
btn.addEventListener('click', function(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    body.style.backgroundColor=`rgb(${r}, ${g}, ${b})`;
    console.log(r)
    console.log(g)
    console.log(b)
})
