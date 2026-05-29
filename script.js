window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

var fadeElements = document.querySelectorAll('.fade-up');

function checkVisibility() {
    fadeElements.forEach(function(el) {
        var rect = el.getBoundingClientRect();
        var windowHeight = window.innerHeight;
        if (rect.top < windowHeight - 100) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        var href = this.getAttribute('href');
        if (href && href !== '#' && href.indexOf('#') === 0 && href.length > 1) {
            e.preventDefault();
            var target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});