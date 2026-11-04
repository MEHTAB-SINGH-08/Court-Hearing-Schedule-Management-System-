const form = document.getElementById("login-form");
const username = document.getElementById("Userin");
const password = document.getElementById("Passin");
const message = document.getElementById("login-message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const enteredUsername = username.value.trim();
    const enteredPassword = password.value;

    if (enteredUsername === "admin" && enteredPassword === "justice123") {
        message.textContent = "Login successful! Welcome to JUSTICE.";
        message.style.color = "green";

        setTimeout(function() {
            window.location.href = "dashboard.html";
        }, 1000);

    } else {
        message.textContent = "Invalid username or password.";
        message.style.color = "red";
    }
});