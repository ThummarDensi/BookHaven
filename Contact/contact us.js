document.addEventListener('DOMContentLoaded', function () {
    // Check login status
    checkLoginStatus();

    // Initialize cart from localStorage
    let cart = JSON.parse(localStorage.getItem('bookhaven_cart')) || [];

    // Update cart badge count on page load
    updateCartBadge();

    // Intersection Observer for animations
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                }
            });
        },
        {
            threshold: 0.1,
        }
    );

    // Observe contact container
    document.querySelectorAll('.contact-container').forEach((el) => {
        observer.observe(el);
    });

    // Button animations
    const buttons = document.querySelectorAll('.btn, .button');
    buttons.forEach((button) => {
        button.addEventListener('mouseenter', function () {
            this.classList.add('animate__animated', 'animate__pulse');
        });
        button.addEventListener('mouseleave', function () {
            this.classList.remove('animate__animated', 'animate__pulse');
        });
    });

    // Set current year in footer
    document.querySelector('.copyright p').innerHTML = `© ${new Date().getFullYear()} BookHaven. All Rights Reserved. | Designed with <i class="fas fa-heart text-danger"></i>`;

    // Function to update cart badge count
    function updateCartBadge() {
        const cartBadge = document.querySelector('.cart-badge');
        const totalItems = cart.reduce((total, item) => total + (item.quantity || 0), 0);
        cartBadge.textContent = totalItems;
        // Animation for badge update
        cartBadge.style.transform = 'scale(1.5)';
        setTimeout(() => {
            cartBadge.style.transform = 'scale(1)';
        }, 300);
    }
});

// Form validation
function validateForm() {
    let isValid = true;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Clear previous errors
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';

    // Name validation
    if (name.trim() === '') {
        document.getElementById('nameError').textContent = 'Please enter your name';
        isValid = false;
    } else if (name.length < 3) {
        document.getElementById('nameError').textContent = 'Name must be at least 3 characters';
        isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === '') {
        document.getElementById('emailError').textContent = 'Please enter your email';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email';
        isValid = false;
    }

    // Phone validation
    const phoneRegex = /^\d{10}$/;
    if (phone.trim() !== '' && !phoneRegex.test(phone)) {
        document.getElementById('phoneError').textContent = 'Please enter a valid 10-digit phone number';
        isValid = false;
    }

    if (isValid) {
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        document.contactForm.reset();
    }

    return isValid;
}

function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const loginLink = document.getElementById('login-link');
    const registerLink = document.getElementById('register-link');
    const profileLink = document.getElementById('profile-link');
    const logoutLink = document.getElementById('logout-link');

    if (isLoggedIn) {
        loginLink.style.display = 'none';
        registerLink.style.display = 'none';
        profileLink.style.display = 'inline-flex';
        logoutLink.style.display = 'inline-flex';
    } else {
        loginLink.style.display = 'inline-flex';
        registerLink.style.display = 'inline-flex';
        profileLink.style.display = 'none';
        logoutLink.style.display = 'none';
    }
}