// Wait until the DOM is fully loaded before executing any scripts
document.addEventListener("DOMContentLoaded", function () {

    // 1. Toggle Mobile Menu (for smaller screens)
    const navToggle = document.getElementById("nav-toggle");
    const navLinks = document.getElementById("nav-links");

    if (navToggle) {
        navToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }

    // 2. Form Validation (on the Contact Page)
    const contactForm = document.querySelector("form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            // Basic form validation: Ensure all fields are filled
            if (!name || !email || !message) {
                alert("Please fill in all fields.");
                event.preventDefault(); // Prevent form submission if validation fails
            } else {
                alert("Thank you for your message, we will get back to you shortly.");
            }
        });
    }

    // 3. Smooth Scroll for Anchor Links (for better user experience)
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            window.scrollTo({
                top: target.offsetTop - 50, // Offset by 50px for header space
                behavior: "smooth"
            });
        });
    });

    // 4. Show/Hide Back-to-Top Button (for long pages)
    const backToTopButton = document.getElementById("back-to-top");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    // 5. Back-to-Top Button Click Event
    if (backToTopButton) {
        backToTopButton.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});
