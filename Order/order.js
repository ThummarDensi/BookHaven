document.addEventListener('DOMContentLoaded', () => {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('orderDate').value = today;
    renderOrderSummary();
    updateCartBadge();
    checkLoginStatus();

    document.querySelector('#orderForm').addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateForm()) {

            const formData = {
                date: document.getElementById('orderDate').value,
                name: document.getElementById('fullName').value,
                phone: document.getElementById('phoneNumber').value,
                email: document.getElementById('emailAddress').value,
                address: document.getElementById('deliveryAddress').value,
                paymentMethod: document.querySelector('input[name="paymentMethod"]:checked').value,
                items: JSON.parse(localStorage.getItem('bookhaven_orders')) || []
            };

            const subtotal = formData.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const total = subtotal + 99.99; // Add shipping

            const orderId = `ORD-${Date.now()}`;
            const orderHistory = JSON.parse(localStorage.getItem('bookhaven_order_history')) || [];

            orderHistory.push({
                orderId,
                date: formData.date,
                customer: {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    address: formData.address
                },
                items: formData.items,
                paymentMethod: formData.paymentMethod,
                subtotal,
                shipping: 99.99,
                total,
                status: 'Processing'
            });

            localStorage.setItem('bookhaven_order_history', JSON.stringify(orderHistory));

            localStorage.removeItem('bookhaven_orders');
            updateCartBadge();
            window.location.href = `../Checkout/checkout.html?orderId=${orderId}`;
        }
    });
});

function clearErrors() {
    const errors = document.querySelectorAll('.form-error');
    errors.forEach(error => {
        error.innerHTML = '';
    });
}

function setErrorMessage(id, message) {
    const element = document.getElementById(`${id}-group`);
    if (element) {
        element.querySelector('.form-error').innerHTML = message;
    }
}

function validateForm() {
    let isValid = true;
    clearErrors();

    const name = document.forms['orderForm']['fullName'].value;
    if (name.trim().length < 3) {
        setErrorMessage('fname', '*Name must be at least 3 characters long*');
        isValid = false;
    }

    const email = document.forms['orderForm']['emailAddress'].value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        setErrorMessage('email', '*Please enter a valid email address*');
        isValid = false;
    }

    const phone = document.forms['orderForm']['phoneNumber'].value;
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        setErrorMessage('phone', '*Phone number must be 10 digits*');
        isValid = false;
    }

    const address = document.forms['orderForm']['deliveryAddress'].value;
    if (address.trim().length < 5) {
        setErrorMessage('address', '*Please enter a complete address*');
        isValid = false;
    }

    const orders = JSON.parse(localStorage.getItem('bookhaven_orders')) || [];
    if (orders.length === 0) {
        alert('Your cart is empty. Please add items before placing an order.');
        isValid = false;
    }

    return isValid;
}

function updateCartBadge() {
    const orders = JSON.parse(localStorage.getItem('bookhaven_orders')) || [];
    const cartBadge = document.querySelector('.cart-badge');
    const totalItems = orders.reduce((sum, order) => sum + order.quantity, 0);
    cartBadge.textContent = totalItems;
}

function renderOrderSummary() {
    const orders = JSON.parse(localStorage.getItem('bookhaven_orders')) || [];
    const summaryItems = document.querySelector('#summaryItems');
    const orderTotal = document.querySelector('#orderTotal');
    summaryItems.innerHTML = '';

    if (orders.length === 0) {
        summaryItems.innerHTML = '<p class="text-muted">No items in order</p>';
        orderTotal.textContent = '₹0.00';
        return;
    }

    let subtotal = 0;
    orders.forEach((order, index) => {
        const itemTotal = order.price * order.quantity;
        subtotal += itemTotal;
        const summaryItem = document.createElement('div');
        summaryItem.className = 'summary-item';
        summaryItem.innerHTML = `
            <span>${order.title} (x${order.quantity})</span>
            <span>₹${(itemTotal).toFixed(2)}</span>
        `;
        summaryItems.appendChild(summaryItem);
    });

    const shipping = 99.99;
    const total = subtotal + shipping;
    orderTotal.textContent = `₹${total.toFixed(2)}`;
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