// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // Welcome message
    console.log("Welcome to Philippine Robotics!");

    // Select buttons
    const learnBtn = document.querySelector('a[href="learn-more.html"]');
    const shopBtn = document.querySelector('a[href="shopping.html"]');

    // Learn More button
    if (learnBtn) {
        learnBtn.addEventListener("click", function () {
            alert("You are going to Learn More page!");
        });
    }

    // Shop Now button
    if (shopBtn) {
        shopBtn.addEventListener("click", function () {
            alert("Welcome to the Shop!");
        });
    }

    // Navigation hover effect (extra feedback)
    const navItems = document.querySelectorAll(".nav-links li");

    navItems.forEach(function (item) {
        item.addEventListener("click", function () {
            console.log("Navigating to: " + item.innerText);
        });
    });

});
