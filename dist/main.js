let showcase = document.querySelector(".showcase");
let menuBtn = document.querySelector(".toggle");



//adding events 
menuBtn.addEventListener('click', ()=>{
    menuBtn.classList.toggle('active');
    showcase.classList.toggle('active');
    
})