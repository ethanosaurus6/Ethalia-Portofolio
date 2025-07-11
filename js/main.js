// Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
        }
    });
    });

    // Scroll to top on reload
    window.onbeforeunload = function () {
    window.scrollTo(0, 0);
    };

    // Hide navbar links on scroll down, show on scroll up
    let lastScrollTop = 0;
    const navLinks = document.querySelectorAll(".about-me, .featured-projects, .languages-tools");

    window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    navLinks.forEach(link => {
        link.style.opacity = scrollTop > lastScrollTop ? "0" : "1";
    });
    lastScrollTop = scrollTop;
    });

    // Open project links from data-link attribute
    document.addEventListener("DOMContentLoaded", function () {
    const projectButtons = document.querySelectorAll(".project-button");

    projectButtons.forEach(button => {
        button.addEventListener("click", function (e) {
        e.preventDefault(); // prevent default <a>
        const url = this.getAttribute("data-link");
        if (url) {
            window.open(url, "_blank"); // open in new tab
        }
        });
    });
    });
