let burger= document.getElementById('burger')
let cross= document.getElementById('cross')
let cb=document.getElementById('cross-burger')
let mbl=document.getElementById('mob-menu')

cb.addEventListener('click',()=>{
    burger.classList.toggle('hidden')
    cross.classList.toggle('hidden')
    mbl.classList.toggle('hidden')

})