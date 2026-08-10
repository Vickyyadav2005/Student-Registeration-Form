const password = document.getElementById("password");
const strengthBar = document.getElementById("strengthBar");
const showPassword = document.getElementById("showPassword");

password.addEventListener("input", function() {

    const value = password.value;

    let score = 0;

    if (value.length >= 6) {
        score++;
    }

    if (/[A-Z]/.test(value)) {
        score++;
    }

    if (/[0-9]/.test(value)) {
        score++;
    }

    if (/[^A-Za-z0-9]/.test(value)) {
        score++;
    }

    if (score === 0) {
        strengthBar.style.width = "0%";
    }

    if (score === 1) {
        strengthBar.style.width = "25%";
        strengthBar.style.background = "#e74c3c";
    }

    if (score === 2) {
        strengthBar.style.width = "50%";
        strengthBar.style.background = "#f39c12";
    }

    if (score === 3) {
        strengthBar.style.width = "75%";
        strengthBar.style.background = "#f1c40f";
    }

    if (score === 4) {
        strengthBar.style.width = "100%";
        strengthBar.style.background = "#20a464";
    }
});

showPassword.addEventListener("click", function() {

    if (password.type === "password") {

        password.type = "text";
        showPassword.textContent = "Hide";

    } else {

        password.type = "password";
        showPassword.textContent = "Show";

    }
});

function checkEmptyFields() {

    const fields = [
        document.getElementById("name"),
        document.getElementById("email"),
        document.getElementById("mobile"),
        document.getElementById("branch"),
        document.getElementById("password")
    ];

    let count = 0;

    fields.forEach(function(field) {

        if (field.value.trim() === "") {
            count++;
        }

    });

    return count;
}