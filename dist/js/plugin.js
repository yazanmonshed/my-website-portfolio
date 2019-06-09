// Start Code JavaScript Here

// Select Item From DOM Elements
const humbruger = document.querySelector('.humbruger');
const brand = document.querySelector('.brand');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav-links');
const navItem = document.querySelectorAll('.nav-item');

// show menu 

let showMenu = false;

humbruger.addEventListener('click', toggleMenu);


function toggleMenu() {
    if (!showMenu) {

        humbruger.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        brand.classList.add('show');
        navItem.forEach(item => {
            item.classList.add('show')
        })
        showMenu = true;
    } else {

        humbruger.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        brand.classList.remove('show');
        navItem.forEach(item => {
            item.classList.remove('show');
        })
        showMenu = false;
    }
}

