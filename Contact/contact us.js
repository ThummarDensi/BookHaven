document.addEventListener('DOMContentLoaded', function () {
    checkLoginStatus();
    let cart = JSON.parse(localStorage.getItem('bookhaven_cart')) || [];
    updateCartBadge();
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

    document.querySelectorAll('.contact-container').forEach((el) => {
        observer.observe(el);
    });

    const buttons = document.querySelectorAll('.btn, .button');
    buttons.forEach((button) => {
        button.addEventListener('mouseenter', function () {
            this.classList.add('animate__animated', 'animate__pulse');
        });
        button.addEventListener('mouseleave', function () {
            this.classList.remove('animate__animated', 'animate__pulse');
        });
    });

    document.querySelector('.copyright p').innerHTML = `© ${new Date().getFullYear()} BookHaven. All Rights Reserved. | Designed with <i class="fas fa-heart text-danger"></i>`;

    function updateCartBadge() {
        const cartBadge = document.querySelector('.cart-badge');
        const totalItems = cart.reduce((total, item) => total + (item.quantity || 0), 0);
        cartBadge.textContent = totalItems;
        cartBadge.style.transform = 'scale(1.5)';
        setTimeout(() => {
            cartBadge.style.transform = 'scale(1)';
        }, 300);
    }
});

function validateForm() {
    let isValid = true;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';

    if (name.trim() === '') {
        document.getElementById('nameError').textContent = 'Please enter your name';
        isValid = false;
    } else if (name.length < 3) {
        document.getElementById('nameError').textContent = 'Name must be at least 3 characters';
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === '') {
        document.getElementById('emailError').textContent = 'Please enter your email';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email';
        isValid = false;
    }

    const phoneRegex = /^\d{10}$/;
    if (phone.trim() !== '' && !phoneRegex.test(phone)) {
        document.getElementById('phoneError').textContent = 'Please enter a valid 10-digit phone number';
        isValid = false;
    }

    if (isValid) {
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