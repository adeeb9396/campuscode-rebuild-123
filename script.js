// CampusCode JavaScript

// LOGIN FORM
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email === "" || password === "") {
            alert("Please fill in all fields.");
        } else {
            alert("Login form submitted successfully!");
        }

    });
}


// REGISTRATION FORM
const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
        } else {
            alert("Registration form submitted successfully!");
        }

    });
}
