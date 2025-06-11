document.addEventListener('DOMContentLoaded', function () {
    // Check login status
    checkLoginStatus();

    // Initialize cart from localStorage or create an empty array
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

    document.querySelectorAll('.product-card, .about-section, .contact-cta').forEach((el) => {
        observer.observe(el);
    });

    // Button animations
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((button) => {
        button.addEventListener('mouseenter', function () {
            this.classList.add('animate__animated', 'animate__pulse');
        });

        button.addEventListener('mouseleave', function () {
            this.classList.remove('animate__animated', 'animate__pulse');
        });
    });

    // Add to Cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach((button) => {
        button.addEventListener('click', function (event) {
            // Prevent default navigation to shopping cart page
            event.preventDefault();

            // Get the parent product card
            const productCard = this.closest('.product-card');

            // Extract book details
            const book = {
                title: productCard.querySelector('.product-title').textContent,
                author: productCard.querySelector('.product-author').textContent,
                price: parseFloat(productCard.querySelector('.product-price').textContent.replace('₹', '')),
                image: productCard.querySelector('.product-img img').src,
                quantity: 1, // Default quantity
            };

            // Check if item already exists in cart
            const existingItem = cart.find((item) => item.title === book.title);
            if (existingItem) {
                existingItem.quantity += 1; // Increment quantity
            } else {
                cart.push(book); // Add new item
            }

            // Save cart to localStorage
            localStorage.setItem('bookhaven_cart', JSON.stringify(cart));

            // Update cart badge
            updateCartBadge();

            // Show confirmation
            alert(`${book.title} has been added to your cart!`);

            // Navigate to shopping cart page
            window.location.href = '../Shoppingcart/shopping cart.html';
        });
    });

    // Function to update cart badge count
    function updateCartBadge() {
        const cartBadge = document.querySelector('.cart-badge');
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartBadge.textContent = totalItems;
        // Animation for badge update
        cartBadge.style.transform = 'scale(1.5)';
        setTimeout(() => {
            cartBadge.style.transform = 'scale(1)';
        }, 300);
    }

    // Function to check login status
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

