document.addEventListener('DOMContentLoaded', () => {
  
    checkLoginStatus();
    const urlParams = new URLSearchParams(window.location.search);
    const orderId = urlParams.get('orderId');

    if (orderId) {
        displayOrderConfirmation(orderId);
    } else {
        document.getElementById('orderConfirmation').innerHTML = `
            <div class="alert alert-danger">
                <h4>Order Not Found</h4>
                <p>No order ID provided. Redirecting to home page...</p>
            </div>
        `;
        setTimeout(() => {
            window.location.href = '../Home/home.html';
        }, 20000);
    }
    updateCartBadge();
});


function displayOrderConfirmation(orderId) {
    const orderHistory = JSON.parse(localStorage.getItem('bookhaven_order_history')) || [];
    const order = orderHistory.find(o => o.orderId === orderId);

    if (!order) {
        document.getElementById('orderConfirmation').innerHTML = `
            <div class="alert alert-danger">
                <h4>Order not found</h4>
                <p>We couldn't find your order details. Please check your order history.</p>
            </div>
        `;
        return;
    }

    document.getElementById('orderId').textContent = order.orderId;
    document.getElementById('orderDate').textContent = order.date;

    const orderDate = new Date(order.date);
    const estimatedDeliveryDate = new Date(orderDate);
    estimatedDeliveryDate.setDate(orderDate.getDate() + 7);
    document.getElementById('estimatedDelivery').textContent = estimatedDeliveryDate.toLocaleDateString();

    const itemsHtml = order.items.map(item => `
        <div class="order-item">
            <div class="row">
                <div class="col-md-6">${item.title} (x${item.quantity})</div>
                <div class="col-md-6 text-end">₹${(item.price * item.quantity).toFixed(2)}</div>
            </div>
        </div>
    `).join('');

    const totalItems = order.items.reduce((sum, item) => sum + item.quantity, 0);
    const grandTotal = order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    document.getElementById('orderItemCount').textContent = totalItems;
    document.getElementById('orderGrandTotal').textContent = `₹${grandTotal.toFixed(2)}`;

    document.getElementById('orderConfirmation').innerHTML = `
        <div class="confirmation-card">
            <div class="confirmation-header">
                <i class="fas fa-check-circle text-success"></i>
                <h2>Order Confirmed!</h2>
                <p>Thank you for your purchase. Your order has been received and is being processed.</p>
            </div>
            
            <div class="confirmation-details">
                <div class="row">
                    <div class="col-md-6">
                        <h4>Order Information</h4>
                        <p><strong>Order ID:</strong> ${order.orderId}</p>
                        <p><strong>Order Date:</strong> ${order.date}</p>
                        <p><strong>Status:</strong> ${order.status}</p>
                        <p><strong>Payment Method:</strong> ${order.paymentMethod}</p>
                    </div>
                    <div class="col-md-6">
                        <h4>Customer Information</h4>
                        <p><strong>Name:</strong> ${order.customer.name}</p>
                        <p><strong>Email:</strong> ${order.customer.email}</p>
                        <p><strong>Phone:</strong> ${order.customer.phone}</p>
                        <p><strong>Address:</strong> ${order.customer.address}</p>
                    </div>
                </div>
                
                <div class="order-items">
                    <h4>Order Items</h4>
                    ${itemsHtml}
                </div>
                
                <div class="order-totals">
                    <div class="row">
                        <div class="col-md-6">Subtotal:</div>
                        <div class="col-md-6 text-end">₹${order.subtotal.toFixed(2)}</div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">Shipping:</div>
                        <div class="col-md-6 text-end">₹${order.shipping.toFixed(2)}</div>
                    </div>
                    <div class="row total">
                        <div class="col-md-6">Total Items:</div>
                        <div class="col-md-6 text-end" id="orderItemCount">${totalItems}</div>
                    </div>
                    <div class="row total">
                        <div class="col-md-6">Grand Total:</div>
                        <div class="col-md-6 text-end" id="orderGrandTotal">₹${grandTotal.toFixed(2)}</div>
                    </div>
                </div>
            </div>
            
            <div class="confirmation-footer">
                <p>We'll send you a confirmation email shortly. You can track your order in your account.</p>
            </div>
        </div>
    `;

    
    document.getElementById('continueShoppingBtn').addEventListener('click', () => {
        localStorage.removeItem('bookhaven_orders');
        localStorage.removeItem('bookhaven_order_history');
    
        updateCartBadge();
      
        window.location.href = '../Home/home.html';
    });
}

function updateCartBadge() {
    const orders = JSON.parse(localStorage.getItem('bookhaven_orders')) || [];
    const cartBadge = document.querySelector('.cart-badge');
    const totalItems = orders.reduce((sum, order) => sum + order.quantity, 0);
    cartBadge.textContent = totalItems;
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