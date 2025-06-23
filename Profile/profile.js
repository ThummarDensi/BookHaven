document.addEventListener('DOMContentLoaded', function () {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
    const loginLink = document.querySelector('a[href="../Login/login.html"]');
    const registerLink = document.querySelector('a[href="../Register/register.html"]');
    const profileLink = document.querySelector('a[href="../Profile/profile.html"]');
    const logoutLink = document.getElementById('logout-link');

    if (!isLoggedIn || !currentUser.email) {
        window.location.href = '../Login/login.html';
        return;
    }
    let cart = JSON.parse(localStorage.getItem('bookhaven_cart')) || [];
    updateCartBadge();

    loginLink.style.display = 'none';
    registerLink.style.display = 'none';
    profileLink.style.display = 'inline-flex';
    logoutLink.style.display = 'inline-flex';
    document.getElementById('fname').textContent = currentUser.fname || '';
    document.getElementById('lname').textContent = currentUser.lname || '';
    document.getElementById('email').textContent = currentUser.email || '';

    document.getElementById('fnameInput').value = currentUser.fname || '';
    document.getElementById('lnameInput').value = currentUser.lname || '';
    document.getElementById('emailInput').value = currentUser.email || '';
    const editButton = document.querySelector('.btn-edit');
    const editForm = document.querySelector('.edit-form');
    const profileCard = document.querySelector('.profile-card');
    const cancelButton = document.querySelector('.btn-cancel');

    editButton.addEventListener('click', function () {
        profileCard.style.display = 'none';
        editForm.style.display = 'block';
        editForm.classList.add('animate__animated', 'animate__fadeIn');
    });

    cancelButton.addEventListener('click', function () {
        editForm.style.display = 'none';
        profileCard.style.display = 'block';
        profileCard.classList.add('animate__animated', 'animate__fadeIn');
        clearErrors();
    });

    document.getElementById('editForm').addEventListener('submit', function (e) {
        e.preventDefault();
        clearErrors();
        let isValid = true;

        const fname = document.forms['editForm']['fname'].value;
        if (fname.length < 1) {
            setError('Fname', '*First name is required');
            isValid = false;
        } else if (fname.length > 20) {
            setError('Fname', '*First name is too long');
            isValid = false;
        }

        const lname = document.forms['editForm']['lname'].value;
        if (lname.length > 20) {
            setError('Lname', '*Last name is too long');
            isValid = false;
        }

        const password = document.forms['editForm']['password'].value;
        if (password && password.length < 6) {
            setError('password', '*Password must be 6+ characters');
            isValid = false;
        }

        if (isValid) {
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const updatedUsers = users.map((user) => {
                if (user.email === currentUser.email) {
                    return {
                        ...user,
                        fname,
                        lname,
                        password: password || user.password,
                    };
                }
                return user;
            });

            localStorage.setItem('users', JSON.stringify(updatedUsers));
            localStorage.setItem(
                'currentUser',
                JSON.stringify({
                    ...currentUser,
                    fname,
                    lname,
                    password: password || currentUser.password,
                })
            );

            document.getElementById('fname').textContent = fname;
            document.getElementById('lname').textContent = lname;

            editForm.style.display = 'none';
            profileCard.style.display = 'block';
            profileCard.classList.add('animate__animated', 'animate__fadeIn');

            alert('Profile updated successfully!');
        }
    });

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate__animated', 'animate__fadeIn');
                }
            });
        },
        {
            threshold: 0.1,
        }
    );

    document.querySelectorAll('.profile-section').forEach((el) => {
        observer.observe(el);
    });

    const buttons = document.querySelectorAll('.btn-edit, .btn-primary, .btn-secondary, .btn-danger');
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
});

function togglePassword(inputId) {
    const passwordInput = document.getElementById(inputId);
    const eyeIcon = passwordInput.nextElementSibling.querySelector('i');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    }
}

function clearErrors() {
    const errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = '';
    }
}

function setError(id, error) {
    const element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}