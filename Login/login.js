// function clearErrors(){
//             const errors = document.getElementsByClassName('formerror');
//             for(let item of errors){
//                 item.innerHTML = "";
//             }
//         }

//         function seterror(id, error){
//             const element = document.getElementById(id);
//             element.getElementsByClassName('formerror')[0].innerHTML = error;
//         }

// function validateForm(){
//     clearErrors();
//     let returnval = true;

//     const email = document.forms['myForm']["femail"].value;
//     if (email.length > 50) {
//         seterror("email", "*Email is too long (max 50 characters)");
//         returnval = false;
//     } else if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
//         seterror("email", "*Please enter a valid email address");
//         returnval = false;
//     }

//     const password = document.forms['myForm']["fpass"].value;
//     if (password.length < 6) {
//         seterror("pass", "*Password should be at least 6 characters long");
//         returnval = false;
//     }

//     return returnval;
// }

// function togglePassword() {
//     const passwordInput = document.getElementById('passwordInput');
//     const eyeIcon = document.querySelector('.password-toggle i');

//     if (passwordInput.type === 'password') {
//         passwordInput.type = 'text';
//         eyeIcon.classList.remove('fa-eye');
//         eyeIcon.classList.add('fa-eye-slash');
//     } else {
//         passwordInput.type = 'password';
//         eyeIcon.classList.remove('fa-eye-slash');
//         eyeIcon.classList.add('fa-eye');
//     }
// }

// // Add animation to form elements on load
// document.addEventListener('DOMContentLoaded', function() {
//     // Add focus effects

// });


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

    // Add hover effect to social buttons
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

    // Password toggle and animation code remains the same...
});

function validateLoginForm() {
    clearErrors();
    let isValid = true;

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Check if user exists
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