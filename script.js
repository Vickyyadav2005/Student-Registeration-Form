const welcomeText = document.getElementById("welcomeText");

const messages = [
    "Create your student account",
    "Your academic journey starts here",
    "Enter your details to continue",
    "Build your student profile today",
    "Welcome to the student registration"
];

let messageIndex = 0;

setInterval(function() {

    messageIndex++;

    if (messageIndex >= messages.length) {
        messageIndex = 0;
    }

    welcomeText.style.opacity = "0";

    setTimeout(function() {

        welcomeText.textContent =
            messages[messageIndex];

        welcomeText.style.opacity = "1";

    }, 300);

}, 3000);


const shapes =
    document.querySelectorAll(".background-shape");

document.addEventListener("mousemove", function(event) {

    const mouseX =
        event.clientX / window.innerWidth - 0.5;

    const mouseY =
        event.clientY / window.innerHeight - 0.5;

    shapes.forEach(function(shape, index) {

        const speed = (index + 1) * 12;

        shape.style.marginLeft =
            mouseX * speed + "px";

        shape.style.marginTop =
            mouseY * speed + "px";

    });

});


const inputs =
    document.querySelectorAll(
        ".field input, .field select"
    );

inputs.forEach(function(input) {

    input.addEventListener("focus", function() {

        input.parentElement.style.transform =
            "translateY(-2px)";

    });

    input.addEventListener("blur", function() {

        input.parentElement.style.transform =
            "translateY(0)";

    });

});


const savedData =
    localStorage.getItem("studentData");

if (savedData) {

    const student =
        JSON.parse(savedData);

    if (student.name) {

        welcomeText.textContent =
            "Welcome back, " +
            student.name +
            " 👋";

    }

}


window.addEventListener("load", function() {

    const card =
        document.querySelector(".register-card");

    card.style.opacity = "1";

});