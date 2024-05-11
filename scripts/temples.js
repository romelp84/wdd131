document.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.querySelector('.menu-icon');
    var navList = document.querySelector('nav ul');

    menuIcon.addEventListener('click', function() {
        navList.classList.toggle('open');
    });
});
