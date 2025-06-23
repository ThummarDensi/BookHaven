const products = [
    {
        title: "Anne Frank: The Diary of a Young Girl",
        author: "Anne Frank",
        price: "₹100",
        image: "../Images/Anne_Frank.jpeg",
    },
    {
        title: "The Tale of Genji",
        author: "Murasaki Shikibu",
        price: "₹260",
        image: "../Images/The_Tale_of_Genji.jpg",
    },
    {
        title: "Harry Potter & Half-Blood Prince",
        author: "J.K. Rowling",
        price: "₹650",
        image: "../Images/Harry_Potter_&_the_Half-Blood_Prince.jpeg",
    },
    {
        title: "The Chronicles of Narnia",
        author: "C.S. Lewis",
        price: "₹999",
        image: "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
        title: "Dollar Bahu",
        author: "Sudha Murty",
        price: "₹399",
        image: "../Images/Dollar_Bahu.jpg",
    },
    {
        title: "One Indian Girl",
        author: "Chetan Bhagat",
        price: "₹160",
        image: "../Images/One_Indian_girl.jpg",
    },
    {
        title: "Who Will Cry When You Die?",
        author: "Robin Sharma",
        price: "₹230",
        image: "../Images/Robin_Sharma.jpg",
    },
    {
        title: "Half Girlfriend",
        author: "Chetan Bhagat",
        price: "₹299",
        image: "../Images/Half_Girlfriend.jpg",
    },
    {
        title: "Harry Potter & Sorcerer's Stone",
        author: "J.K. Rowling",
        price: "₹140",
        image: "../Images/Harry_Potter_&_Sorcerer's_Stone.jpg",
    },
    {
        title: "Five Point Someone",
        author: "Chetan Bhagat",
        price: "₹293",
        image: "../Images/Five_Point_Someone.jpg",
    },
    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        price: "₹280",
        image: "../Images/The_Alchemist.jpg",
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: "₹320",
        image: "../Images/The_Great_Gatsby.jpg",
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        price: "₹350",
        image: "../Images/To_Kill_a_Mockingbird.jpg",
    },
    {
        title: "1984",
        author: "George Orwell",
        price: "₹290",
        image: "../Images/1984.jpg",
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        price: "₹270",
        image: "../Images/Pride_&_Prejudice.jpg",
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        price: "₹380",
        image: "../Images/The_Hobbit.jpg",
    },
    {
        title: "The Hound of The Baskervilles",
        author: "Arthur Conan Doyle",
        price: "₹179",
        image: "../Images/The_Hound_of_The_Baskervilles.jpg",
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        price: "₹310",
        image: "../Images/The_Catcher_in_the_Rye.jpg",
    },
    {
        title: "Animal Farm",
        author: "George Orwell",
        price: "₹260",
        image: "../Images/Animal_Farm.jpg",
    },
    {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        price: "₹659",
        image: "../Images/The_Lord_of_the_Rings.jpg",
    },
    {
        title: "Brave New World",
        author: "Aldous Huxley",
        price: "₹330",
        image: "../Images/Brave_New_World.jpg",
    },
    {
        title: "Harry Potter & Chamber of Secrets",
        author: "J.K. Rowling",
        price: "₹420",
        image: "../Images/Harry_Potter_&_Chamber_of_Secrets.jpg",
    },
    {
        title: "The Da Vinci Code",
        author: "Dan Brown",
        price: "₹370",
        image: "../Images/The_Da_Vinci_Code.jpg",
    },
    {
        title: "The Shining King",
        author: "Stephen King",
        price: "₹340",
        image: "../Images/The_Shining.jpg",
    },
    {
        title: "The Hunger Games",
        author: "Suzanne Collins",
        price: "₹360",
        image: "../Images/The_Hunger_Games.jpg",
    },
    {
        title: "The Book Thief",
        author: "Markus Zusak",
        price: "₹390",
        image: "https://images.unsplash.com/photo-1513001900722-370f803f498d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
        title: "Gone with the Wind",
        author: "Margaret Mitchell",
        price: "₹410",
        image: "../Images/Gone_with_the_Wind.jpg",
    },
    {
        title: "The Kite Runner",
        author: "Khaled Hosseini",
        price: "₹320",
        image: "../Images/The_Kite_Runner.jpg",
    },
    {
        title: "Moby Dick",
        author: "Herman Melville",
        price: "₹290",
        image: "../Images/Moby_Dick.jpg",
    },
    {
        title: "War and Peace",
        author: "Leo Tolstoy",
        price: "₹450",
        image: "../Images/War_and_Peace.jpg",
    },
    {
        title: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        price: "₹330",
        image: "../Images/Crime_and_Punishment.jpg",
    },
    {
        title: "The Odyssey",
        author: "Homer",
        price: "₹380",
        image: "../Images/The_Odyssey.jpg",
    },
    {
        title: "The Art of War",
        author: "Sun Tzu",
        price: "₹240",
        image: "../Images/The_Art_Of_War.jpg",
    },
    {
        title: "Thank You for Leaving",
        author: "Unknown",
        price: "₹290",
        image: "../Images/Thank_You_for_Leaving.jpg",
    },
    {
        title: "Ikigai",
        author: "Héctor García",
        price: "₹363",
        image: "../Images/Ikigai.jpg",
    },
    {
        title: "The Blue Fairy Book",
        author: "Andrew Lang",
        price: "₹200",
        image: "../Images/The_Blue_Fairy_Book.jpg",
    },
];

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
    document.querySelectorAll('.products-section, .product-card').forEach((el) => {
        observer.observe(el);
    });
    const buttons = document.querySelectorAll('.btn, .add-to-cart, .quantity-btn');
    buttons.forEach((button) => {
        button.addEventListener('mouseenter', function () {
            this.classList.add('animate__animated', 'animate__pulse');
        });
        button.addEventListener('mouseleave', function () {
            this.classList.remove('animate__animated', 'animate__pulse');
        });
    });

    initCart();
    renderProducts();
    setupPagination();
});

const productsPerPage = 6;
let currentPage = 1;
const productsContainer = document.getElementById('productsContainer');
const paginationContainer = document.getElementById('paginationContainer');
let cart = [];
const cartBadge = document.querySelector('.cart-badge');

function initCart() {
    const savedCart = localStorage.getItem('bookhaven_cart');
    cart = savedCart ? JSON.parse(savedCart) : [];
    updateCartBadge();
}

function saveCart() {
    localStorage.setItem('bookhaven_cart', JSON.stringify(cart));
}

function updateCartBadge() {
    const totalItems = cart.reduce((total, item) => total + (item.quantity || 0), 0);
    cartBadge.textContent = totalItems;
    cartBadge.style.transform = 'scale(1.5)';
    setTimeout(() => {
        cartBadge.style.transform = 'scale(1)';
    }, 300);
}

function renderProducts() {
    productsContainer.innerHTML = '';
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = Math.min(startIndex + productsPerPage, products.length);

    for (let i = startIndex; i < endIndex; i++) {
        const product = products[i];
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-img">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-author">${product.author || 'Unknown Author'}</p>
                <div class="price-quantity-row">
                    <div class="quantity-control">
                        <button class="quantity-btn minus">-</button>
                        <input type="number" class="quantity-input" value="1" min="1">
                        <button class="quantity-btn plus">+</button>
                    </div>
                    <p class="product-price">${product.price}</p>
                </div>
                <button class="add-to-cart">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        `;
        productsContainer.appendChild(card);
    }

    document.querySelectorAll('.product-card').forEach((card, index) => {
        card.style.animationDelay = `${0.1 * (index % productsPerPage)}s`;
    });
}

function setupPagination() {
    paginationContainer.innerHTML = '';
    const pageCount = Math.ceil(products.length / productsPerPage);
    if (pageCount <= 1) return;

    const prevButton = document.createElement('a');
    prevButton.href = '#';
    prevButton.innerHTML = '«';
    prevButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentPage > 1) {
            currentPage--;
            renderProducts();
            setupPagination();
            window.scrollTo({ top: productsContainer.offsetTop - 100, behavior: 'smooth' });
        }
    });
    paginationContainer.appendChild(prevButton);

    for (let i = 1; i <= pageCount; i++) {
        const pageButton = document.createElement('a');
        pageButton.href = '#';
        pageButton.textContent = i;
        if (i === currentPage) {
            pageButton.classList.add('active');
        }
        pageButton.addEventListener('click', (e) => {
            e.preventDefault();
            currentPage = i;
            renderProducts();
            setupPagination();
            window.scrollTo({ top: productsContainer.offsetTop - 100, behavior: 'smooth' });
        });
        paginationContainer.appendChild(pageButton);
    }

    const nextButton = document.createElement('a');
    nextButton.href = '#';
    nextButton.innerHTML = '»';
    nextButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentPage < pageCount) {
            currentPage++;
            renderProducts();
            setupPagination();
            window.scrollTo({ top: productsContainer.offsetTop - 100, behavior: 'smooth' });
        }
    });
    paginationContainer.appendChild(nextButton);
}

document.addEventListener('click', function (e) {
    if (e.target.classList.contains('quantity-btn')) {
        const control = e.target.closest('.quantity-control');
        const input = control.querySelector('.quantity-input');
        let value = parseInt(input.value);
        if (e.target.classList.contains('minus')) {
            if (value > 1) {
                input.value = value - 1;
            }
        } else if (e.target.classList.contains('plus')) {
            input.value = value + 1;
        }
    }

    if (e.target.classList.contains('add-to-cart') || e.target.closest('.add-to-cart')) {
        const button = e.target.classList.contains('add-to-cart')
            ? e.target
            : e.target.closest('.add-to-cart');
        if (button.dataset.animating) return;
        button.dataset.animating = 'true';

        const card = button.closest('.product-card');
        const title = card.querySelector('.product-title').textContent;
        const author = card.querySelector('.product-author').textContent;
        const priceText = card.querySelector('.product-price').textContent;
        const price = parseFloat(priceText.replace('₹', ''));
        const quantity = parseInt(card.querySelector('.quantity-input').value);
        const image = card.querySelector('.product-img img').src;

        addToCart(title, author, price, quantity, image);

        button.innerHTML = '<i class="fas fa-check"></i> Added!';
        button.style.background = '#28a745';
        setTimeout(() => {
            button.innerHTML = '<i class="fas fa-shopping-cart"></i> Add to Cart';
            button.style.background = '';
            delete button.dataset.animating;
        }, 2000);
    }
});

function addToCart(title, author, price, quantity, image) {
    const existingItem = cart.find((item) => item.title === title);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ title, author, price, quantity, image });
    }
    saveCart();
    updateCartBadge();
    showNotification(`${title} added to cart!`);
}

function showNotification(message) {
    let notification = document.querySelector('.cart-notification');
    if (!notification) {
        notification = document.createElement('div');
        notification.className = 'cart-notification';
        document.body.appendChild(notification);
    }
    notification.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

document.addEventListener('input', function (e) {
    if (e.target.classList.contains('quantity-input')) {
        let value = parseInt(e.target.value);
        if (isNaN(value) || value < 1) {
            e.target.value = 1;
        } else if (value > 99) {
            e.target.value = 99;
        }
    }
});

document.addEventListener('keydown', function (e) {
    if (e.target.classList.contains('quantity-input')) {
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            e.target.value = parseInt(e.target.value) + 1;
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            const newValue = parseInt(e.target.value) - 1;
            e.target.value = newValue > 0 ? newValue : 1;
        }
    }
});

document.addEventListener('keypress', function (e) {
    if (e.target.classList.contains('quantity-input') && e.key === 'Enter') {
        e.preventDefault();
    }
});

productsContainer.addEventListener('mouseover', function (e) {
    const card = e.target.closest('.product-card');
    if (card) {
        card.classList.add('hovered');
    }
});

productsContainer.addEventListener('mouseout', function (e) {
    const card = e.target.closest('.product-card');
    if (card) {
        card.classList.remove('hovered');
    }
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