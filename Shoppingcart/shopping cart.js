const cartContainer = document.getElementById('cartContainer');
const grandTotalElement = document.getElementById('grandTotal');
const cartItemCountElement = document.getElementById('cartItemCount');
const cartBadge = document.querySelector('.cart-badge');
let cart = [];

document.addEventListener('DOMContentLoaded', function () {
    checkLoginStatus();

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

    document.querySelectorAll('.product-card, .cart-section').forEach((el) => {
        observer.observe(el);
    });

    const buttons = document.querySelectorAll('.btn, .button4, .b1');
    buttons.forEach((button) => {
        button.addEventListener('mouseenter', function () {
            this.classList.add('animate__animated', 'animate__pulse');
        });

        button.addEventListener('mouseleave', function () {
            this.classList.remove('animate__animated', 'animate__pulse');
        });
    });
    initCart();
});

function initCart() {
    const savedCart = localStorage.getItem('bookhaven_cart');
    cart = savedCart ? JSON.parse(savedCart) : [];
    renderCart();
    updateGrandTotal();
    updateCartItemCount();
    updateCartBadge();
}

function saveCart() {
    localStorage.setItem('bookhaven_cart', JSON.stringify(cart));
}

function addToOrder(index) {
    const item = cart[index];
    let orders = JSON.parse(localStorage.getItem('bookhaven_orders')) || [];

    const existingOrder = orders.find((order) => order.title === item.title);
    if (existingOrder) {
        existingOrder.quantity += item.quantity;
    } else {
        orders.push({ ...item });
    }

    localStorage.setItem('bookhaven_orders', JSON.stringify(orders));

    cart.splice(index, 1);
    saveCart();
    renderCart();
    updateGrandTotal();
    updateCartItemCount();
    updateCartBadge();

    window.location.href = '../Order/order.html';
}

function updateCartBadge() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartBadge.textContent = totalItems;
    cartBadge.style.transform = 'scale(1.5)';
    setTimeout(() => {
        cartBadge.style.transform = 'scale(1)';
    }, 300);
}

function updateGrandTotal() {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    grandTotalElement.textContent = `₹${total.toFixed(2)}`;
}

function updateCartItemCount() {
    const totalItems = cart.length;
    cartItemCountElement.textContent = `${totalItems} Item${totalItems !== 1 ? 's' : ''}`;
}

function renderCart() {
    cartContainer.innerHTML = '';
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p class="cart-text">Your cart is empty.</p>';
        return;
    }

    cart.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.animationDelay = `${0.2 * index}s`;
        card.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p class="author">${item.author || 'Unknown Author'}</p>
            <input type="number" class="form-control quantity-input" value="${item.quantity}" min="1" data-index="${index}">
            <p class="price">₹${item.price.toFixed(2)}</p>
            <button class="add-to-order-btn" data-index="${index}"><i class="fas fa-check"></i> Add to Order</button>
            <button class="delete-btn" data-index="${index}"><i class="fas fa-trash"></i> Remove</button>
        `;
        cartContainer.appendChild(card);
    });
}

document.addEventListener('click', (e) => {
    if (e.target.closest('.delete-btn')) {
        const card = e.target.closest('.card');
        const index = parseInt(e.target.closest('.delete-btn').dataset.index);
        card.style.animation = 'fadeOut 0.5s ease-out';
        card.addEventListener(
            'animationend',
            () => {
                cart.splice(index, 1);
                saveCart();
                renderCart();
                updateGrandTotal();
                updateCartItemCount();
                updateCartBadge();
            },
            { once: true }
        );
    }

    if (e.target.closest('.add-to-order-btn')) {
        const index = parseInt(e.target.closest('.add-to-order-btn').dataset.index);
        const card = e.target.closest('.card');
        card.style.animation = 'fadeOut 0.5s ease-out';
        card.addEventListener(
            'animationend',
            () => {
                addToOrder(index);
            },
            { once: true }
        );
    }
});

document.addEventListener('input', (e) => {
    if (e.target.classList.contains('quantity-input')) {
        const index = parseInt(e.target.dataset.index);
        let value = parseInt(e.target.value);
        if (isNaN(value) || value < 1) {
            value = 1;
            e.target.value = value;
        }
        cart[index].quantity = value;
        saveCart();
        updateGrandTotal();
        updateCartItemCount();
        updateCartBadge();
    }
});

document.querySelector('.button4').addEventListener('click', (e) => {
    e.preventDefault();
    cart = [];
    saveCart();
    renderCart();
    updateGrandTotal();
    updateCartItemCount();
    updateCartBadge();
    alert('Cart cleared!');
});

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