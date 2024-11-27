// Select the hamburger menu button and the navigation links container
const hamburgerButton = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

// Add an event listener to toggle the 'show' class
hamburgerButton.addEventListener('click', (event) => {
    navLinks.classList.toggle('show');
});

// Make sure the links work normally
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        // Close the menu after clicking a link (for better UX on small screens)
        navLinks.classList.remove('show');
    });
});

