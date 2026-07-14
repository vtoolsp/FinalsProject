// Philippine Robotics Website Javascript

document.addEventListener("DOMContentLoaded", function () {

    console.log("Philippine Robotics Website Loaded");

    // =========================
    // Welcome Message (Home Page)
    // =========================
    if (document.title.includes("Philippine Robotics")) {
        console.log("Welcome to Philippine Robotics!");
    }

    // =========================
    // Button Hover Animation
    // =========================
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {

        button.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.05)";
            this.style.transition = "0.3s";
            this.style.opacity = "0.9";
        });

        button.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
            this.style.opacity = "1";
        });

    });

    // =========================
    // Product Buttons
    // =========================
    const buyButtons = document.querySelectorAll("button");

    buyButtons.forEach(button => {

        button.addEventListener("click", function () {

            const text = this.innerText.toLowerCase();

            if (text.includes("buy")) {
                alert("Thank you for choosing Philippine Robotics!");
            }

            if (text.includes("view")) {
                console.log("Viewing product details...");
            }

        });

    });

    // =========================
    // Contact Form Validation
    // =========================
    const form = document.querySelector("form");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();
            const number = document.getElementById("number").value.trim();

            if (
                name === "" ||
                email === "" ||
                message === "" ||
                number === ""
            ) {
                alert("Please complete all fields.");
                return;
            }

            if (number.length !== 11) {
                alert("Phone number must contain 11 digits.");
                return;
            }

            alert("Your message has been sent successfully!");

            form.reset();

        });

    }

    // =========================
    // Navigation Click
    // =========================
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {

        link.addEventListener("click", function () {

            console.log("Opening: " + this.textContent);

        });

    });

    // =========================
    // Product Cards
    // =========================
    const cards = document.querySelectorAll(".product-card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", function () {

            this.style.transform = "scale(1.03)";
            this.style.transition = "0.3s";

        });

        card.addEventListener("mouseleave", function () {

            this.style.transform = "scale(1)";

        });

    });

    // =========================
    // Image Animation
    // =========================
    const images = document.querySelectorAll("img");

    images.forEach(image => {

        image.addEventListener("mouseenter", function () {

            this.style.transform = "scale(1.02)";
            this.style.transition = "0.3s";

        });

        image.addEventListener("mouseleave", function () {

            this.style.transform = "scale(1)";

        });

    });

});
