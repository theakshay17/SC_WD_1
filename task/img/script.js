let nav = document.querySelector('.navBar');

window.addEventListener("scroll", function () {
    if (window.scrollY > 10) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
        navLinks.classList.remove('scrolled')
    }
});