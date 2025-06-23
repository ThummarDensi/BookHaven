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
    document.querySelectorAll('.about-section, .features-section, .team-section').forEach((el) => {
        observer.observe(el);
    });

    const buttons = document.querySelectorAll('.btn, .btn-about');
    buttons.forEach((button) => {
        button.addEventListener('mouseenter', function () {
            this.classList.add('animate__animated', 'animate__pulse');
        });

        button.addEventListener('mouseleave', function () {
            this.classList.remove('animate__animated', 'animate__pulse');
        });
    });

    function updateCartBadge() {
        const cartBadge = document.querySelector('.cart-badge');
        const totalItems = cart.reduce((total, item) => total + (item.quantity || 0), 0);
        cartBadge.textContent = totalItems;
        cartBadge.style.transform = 'scale(1.5)';
        setTimeout(() => {
            cartBadge.style.transform = 'scale(1)';
        }, 300);
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
});