document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Fade-in effect when sections come into view
    const sections = document.querySelectorAll('.full-section');
    const options = {
        threshold: 0.2 // Adjust visibility threshold for the effect to trigger
    };

    const fadeInOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Once faded in, stop observing
            }
        });
    }, options);

    sections.forEach(section => fadeInOnScroll.observe(section));

    // Toggle for navigation
    const navToggleButton = document.querySelector('.navbar-toggler');
    const navMenu = document.querySelector('#navbarNav');
    const navLinks = document.querySelectorAll('nav a');

    // Add event listener for nav toggle button
    if (navToggleButton) {
        navToggleButton.addEventListener('click', () => {
            navMenu.classList.toggle('active'); // Custom active toggle for showing/hiding the menu
        });
    }

    // Close the navbar when a link is clicked (for mobile view)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 768 && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active'); // Manually close the nav after a link is clicked
            }
        });
    });
});
