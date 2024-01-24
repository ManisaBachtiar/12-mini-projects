let open= document.getElementById('open')
let close= document.getElementById('close')
let sidebar= document.getElementById('sidebar')
console.log(open)
console.log(sidebar)
open.addEventListener('click', function()
{
    sidebar.classList.toggle('left');
})
close.addEventListener('click', function()
{
    sidebar.classList.add('left');
})
console.log(open)