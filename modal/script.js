
let click = document.getElementById('check');
let modal = document.getElementById('modal');
let close = document.getElementById('close');
let contain = document.getElementById('contain');
modal.classList.add('none');
click.addEventListener('click', function(){
    modal.classList.remove('none')
    click.classList.add('none');
    contain.classList.add('back')
})
close.addEventListener('click', function(){
    modal.classList.add('none')
    click.classList.remove('none');
    contain.classList.remove('back')
})
