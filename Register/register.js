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

    // Password toggle and animation code remains the same...
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

    // Validation checks (existing checks remain)
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

        // Check if email already exists
        if (users.some(user => user.email === email)) {
            seterror("email", "*Email already registered");
            isValid = false;
        } else {
            // Save new user with all fields
            users.push({
                fname,
                lname,
                email,
                password,
                phone,
                address: `${address}, ${city}, ${state}` // Combine address fields
            });
            localStorage.setItem('users', JSON.stringify(users));
            alert('Registration successful! Please login.');
            window.location.href = '../Login/login.html';
        }
    }

    return isValid;
}

// Helper functions remain the same
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