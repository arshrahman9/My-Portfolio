const toggleTheme = document.getElementById('toggleTheme');
const body = document.body;

toggleTheme.addEventListener('click', function() {
    // Toggle between dark and light mode
    body.classList.toggle('bg-dark');
    body.classList.toggle('bg-light');

    // Change button text based on the mode
    if (body.classList.contains('bg-dark')) {
        toggleTheme.innerHTML = "🌞 Light Mode";
    } else {
        toggleTheme.innerHTML = "🌙 Dark Mode";
    }
    
    // Save the user's theme preference in local storage
    const currentTheme = body.classList.contains('bg-dark') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
});

// Apply saved theme on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('bg-dark');
    body.classList.remove('bg-light');
    toggleTheme.innerHTML = "🌞 Light Mode";
} else {
    body.classList.add('bg-light');
    body.classList.remove('bg-dark');
    toggleTheme.innerHTML = "🌙 Dark Mode";
}

// Smooth scroll for navigation
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate elements when they scroll into view
const animatedElements = document.querySelectorAll('.animate__animated');
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__fadeIn');
        }
    });
}, { threshold: 0.5 });

animatedElements.forEach(element => observer.observe(element));

// Form submission handling
const contactForm = document.querySelector('form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you ${name}, your message has been sent!`);
        contactForm.reset();
    } else {
        alert('Please fill in all fields before submitting.');
    }
});
