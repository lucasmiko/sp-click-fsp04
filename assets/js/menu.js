const linkMenu = document.querySelector('.link-menu');
const linkCloseMenu = document.querySelector('.close-icon');
const menuLinks = document.querySelector('.menu-links');


linkMenu.addEventListener('click', (event) => {
    event.preventDefault();

    menuLinks.classList.toggle('menu-open');

});

linkCloseMenu.addEventListener('click', (event) => {
    event.preventDefault();

    menuLinks.classList.toggle('menu-open')
})