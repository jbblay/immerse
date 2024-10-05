// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
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
            observer.unobserve(entry.target); // Once faded in, no need to observe anymore
        }
    });
}, options);

sections.forEach(section => {
    fadeInOnScroll.observe(section);
});
