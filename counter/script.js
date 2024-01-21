let btn1 = document.querySelectorAll('.flex button')[0];
let btn2 = document.querySelectorAll('.flex button')[1];
let btn3 = document.querySelectorAll('.flex button')[2];
let btn4 = document.getElementById('btn4');
btn3.addEventListener('click', function(){
    btn2.innerHTML= parseInt(btn2.innerHTML) + 1;
})
btn1.addEventListener('click', function(){
    let current = parseInt(btn2.innerHTML);
    if(current>0){
        let newValue = current-1;
        btn2.innerHTML =newValue;
    }
})
btn4.addEventListener('click', function(){
    btn2.innerHTML= 0;
})