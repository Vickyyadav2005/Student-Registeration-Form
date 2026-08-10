const form = document.getElementById("studentForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const mobileInput = document.getElementById("mobile");
const branchInput = document.getElementById("branch");
const passwordInput = document.getElementById("password");

function showMessage(id, message, good) {

    const messageBox = document.getElementById(id);

    messageBox.textContent = message;

    if (good) {
        messageBox.style.color = "#20a464";
    } else {
        messageBox.style.color = "#e25555";
    }
}

function validateName() {

    const value = nameInput.value.trim();

    if (value === "") {
        nameInput.classList.add("invalid");
        nameInput.classList.remove("valid");
        showMessage("nameMessage", "Please enter your name", false);
        return false;
    }

    if (value.length < 3) {
        nameInput.classList.add("invalid");
        nameInput.classList.remove("valid");
        showMessage("nameMessage", "Name should have at least 3 characters", false);
        return false;
    }

    nameInput.classList.add("valid");
    nameInput.classList.remove("invalid");
    showMessage("nameMessage", "Name looks good", true);

    return true;
}

function validateEmail() {

    const value = emailInput.value.trim();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value === "") {
        emailInput.classList.add("invalid");
        emailInput.classList.remove("valid");
        showMessage("emailMessage", "Please enter your email", false);
        return false;
    }

    if (!emailPattern.test(value)) {
        emailInput.classList.add("invalid");
        emailInput.classList.remove("valid");
        showMessage("emailMessage", "Please enter a valid email", false);
        return false;
    }

    emailInput.classList.add("valid");
    emailInput.classList.remove("invalid");
    showMessage("emailMessage", "Email looks good", true);

    return true;
}

function validateMobile() {

    const value = mobileInput.value.trim();

    if (value === "") {
        mobileInput.classList.add("invalid");
        mobileInput.classList.remove("valid");
        showMessage("mobileMessage", "Please enter your mobile number", false);
        return false;
    }

    if (!/^[0-9]{10}$/.test(value)) {
        mobileInput.classList.add("invalid");
        mobileInput.classList.remove("valid");
        showMessage("mobileMessage", "Enter exactly 10 digits", false);
        return false;
    }

    mobileInput.classList.add("valid");
    mobileInput.classList.remove("invalid");
    showMessage("mobileMessage", "Mobile number looks good", true);

    return true;
}

function validateBranch() {

    if (branchInput.value === "") {
        branchInput.classList.add("invalid");
        branchInput.classList.remove("valid");
        showMessage("branchMessage", "Please select your branch", false);
        return false;
    }

    branchInput.classList.add("valid");
    branchInput.classList.remove("invalid");
    showMessage("branchMessage", "Branch selected", true);

    return true;
}

function validatePassword() {

    const value = passwordInput.value;

    if (value === "") {
        passwordInput.classList.add("invalid");
        passwordInput.classList.remove("valid");
        showMessage("passwordMessage", "Please create a password", false);
        return false;
    }

    if (value.length < 6) {
        passwordInput.classList.add("invalid");
        passwordInput.classList.remove("valid");
        showMessage("passwordMessage", "Password needs at least 6 characters", false);
        return false;
    }

    passwordInput.classList.add("valid");
    passwordInput.classList.remove("invalid");
    showMessage("passwordMessage", "Password looks good", true);

    return true;
}

nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
mobileInput.addEventListener("input", validateMobile);
branchInput.addEventListener("change", validateBranch);
passwordInput.addEventListener("input", validatePassword);

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const nameOkay = validateName();
    const emailOkay = validateEmail();
    const mobileOkay = validateMobile();
    const branchOkay = validateBranch();
    const passwordOkay = validatePassword();

    if (
        nameOkay &&
        emailOkay &&
        mobileOkay &&
        branchOkay &&
        passwordOkay
    ) {
        registerStudent();
    }
});

function registerStudent() {

    const name = nameInput.value.trim();

    const student = {
        name: name,
        email: emailInput.value.trim(),
        mobile: mobileInput.value.trim(),
        branch: branchInput.value
    };

    localStorage.setItem(
        "studentData",
        JSON.stringify(student)
    );

    const result = document.getElementById("result");

    result.innerHTML =
        "Registration Successful! 🎉<br>" +
        "Welcome, " + name + "!";

    result.className = "success-message";

    form.reset();

    nameInput.classList.remove("valid");
    emailInput.classList.remove("valid");
    mobileInput.classList.remove("valid");
    branchInput.classList.remove("valid");
    passwordInput.classList.remove("valid");

    document.getElementById("strengthBar").style.width = "0%";

    setTimeout(function() {

        result.innerHTML = "";
        result.className = "";

    }, 5000);
}