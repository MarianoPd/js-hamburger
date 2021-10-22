/** show / hide */

const smblHamburger = document.querySelector('.fa-bars');
const hamMenu = document.querySelector('.hamburger-menu');
smblHamburger.addEventListener('click',function(){
    

    hamMenu.classList.add('active');
});

const smblClose = document.querySelector('.close');

smblClose.addEventListener('click',function(){
    
    hamMenu.classList.remove('active');
});