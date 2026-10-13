// Mobile navigation and small page enhancements for Ben's portfolio.

document.addEventListener("DOMContentLoaded", () => {
    // Select the mobile menu button and navigation list.
    const menuToggle = document.querySelector("#menu-toggle");
    const navLinks = document.querySelector("#nav-links");
    const navigationItems = document.querySelectorAll("#nav-links a");

    // Open or close the mobile navigation when the button is clicked.
    menuToggle.addEventListener("click", () => {
        const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", String(!isExpanded));
        menuToggle.setAttribute(
            "aria-label",
            isExpanded ? "Open navigation menu" : "Close navigation menu"
        );
        navLinks.classList.toggle("is-open", !isExpanded);
    });

    // Close the mobile navigation after a section link is selected.
    navigationItems.forEach((item) => {
        item.addEventListener("click", () => {
            navLinks.classList.remove("is-open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
        });
    });

    // Keep the copyright year current automatically.
    const yearElement = document.querySelector("#current-year");
    yearElement.textContent = new Date().getFullYear();
});


// Check local portfolio images and show a clear fallback if an image path is wrong.
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("img").forEach((image) => {
        image.addEventListener("error", () => {
            image.classList.add("image-load-error");
            image.alt = "Image unavailable: " + image.getAttribute("src");
        });
    });
});
