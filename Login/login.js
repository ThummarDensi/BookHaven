document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const inputs = document.querySelectorAll('.form-control');
    inputs.forEach(input => {
        input.addEventListener('focus', function () {
            this.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', function () {
            this.parentElement.classList.remove('focused');
        });
    });
    const socialBtns = document.querySelectorAll('.social-btn');
    socialBtns.forEach(btn => {
        btn.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-3px)';
        });

        btn.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
        });
    });

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        validateLoginForm();
    });

});

function validateLoginForm() {
    clearErrors();
    let isValid = true;

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email);

    if (!user) {
        seterror("email", "*You need to register first");
        isValid = false;
    } else if (user.password !== password) {
        seterror("pass", "*Incorrect password");
        isValid = false;
    }

    if (isValid) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = '../Profile/profile.html';
    }

    return isValid;
}


function clearErrors() {
    document.querySelectorAll('.formerror').forEach(el => el.innerHTML = '');
}

function seterror(id, error) {
    const element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}

function togglePassword(id) {
    const input = document.getElementById(id);
    if (input.type === 'password') {
        input.type = 'text';
    } else {
        input.type = 'password';
    }
}