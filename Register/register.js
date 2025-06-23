document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('registerForm');

    registerForm.addEventListener('submit', function (e) {
        e.preventDefault();
        validateRegisterForm();
    });


    const inputs = document.querySelectorAll('.form-control');
    inputs.forEach(input => {
        input.addEventListener('focus', function () {
            this.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', function () {
            this.parentElement.classList.remove('focused');
        });
    });

    const checkbox = document.querySelector('.form-check-input');
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            this.parentElement.classList.add('checked');
        } else {
            this.parentElement.classList.remove('checked');
        }
    });
});

function validateRegisterForm() {
    clearErrors();
    let isValid = true;

    const fname = document.forms['registerForm']["fname"].value;
    const lname = document.forms['registerForm']["lname"].value;
    const email = document.forms['registerForm']["femail"].value;
    const password = document.forms['registerForm']["fpass"].value;
    const cpassword = document.forms['registerForm']["fcpass"].value;
    const phone = document.forms['registerForm']["fphone"].value;
    const address = document.forms['registerForm']["text"].value;
    const city = document.getElementById('inputCity').value;
    const state = document.getElementById('inputState').value;

    if (fname.length > 20) {
        seterror("Fname", "*First name is too long");
        isValid = false;
    }

    if (lname.length > 20) {
        seterror("Lname", "*Last name is too long");
        isValid = false;
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        seterror("email", "*Invalid email address");
        isValid = false;
    }

    if (password.length < 6) {
        seterror("pass", "*Password must be 6+ characters");
        isValid = false;
    }

    if (password !== cpassword) {
        seterror("cpass", "*Passwords don't match");
        isValid = false;
    }

    if (phone.length != 10 || !phone.match(/^\d+$/)) {
        seterror("phone", "*Invalid phone number");
        isValid = false;
    }

    if (isValid) {
        const users = JSON.parse(localStorage.getItem('users') || '[]');

        if (users.some(user => user.email === email)) {
            seterror("email", "*Email already registered");
            isValid = false;
        } else {
            users.push({
                fname,
                lname,
                email,
                password,
                phone,
                address: `${address}, ${city}, ${state}`
            });
            localStorage.setItem('users', JSON.stringify(users));
            alert('Registration successful! Please login.');
            window.location.href = '../Login/login.html';
        }
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