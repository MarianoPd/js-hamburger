/** show / hide */


/**prendo gli elementi che mi servono */
const smblHamburger = document.querySelector('.fa-bars');
const hamMenu = document.querySelector('.hamburger-menu');
const smblClose = document.querySelector('.close');

/**se clicko sul simbolo dell'hamburger menu' mostro il menu'  */
smblHamburger.addEventListener('click',function(){
    hamMenu.classList.add('active');
});

/**se clicko sul simbolo per chiudere il menu' nascondo il menu'  */
smblClose.addEventListener('click',function(){
    hamMenu.classList.remove('active');
});