burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navlist = document.querySelector('.nav-list');
rightnav = document.querySelector('.right-nav');


burger.addEventListener('click', () => {
    rightnav.classList.toggle('visibility-toggle-resp');
    navlist.classList.toggle('visibility-toggle-resp');
    navbar.classList.toggle('height-toggle');
})