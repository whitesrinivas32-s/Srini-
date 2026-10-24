// ===================================
// S. Srinivasan - Portfolio JavaScript
// ===================================

document.addEventListener("DOMContentLoaded", function () {

    // Mobile Navigation Menu
    const menuToggle = document.querySelector(
        ".menu-toggle, .nav-toggle, #menu-toggle, #nav-toggle"
    );

    const navMenu = document.querySelector(
        ".nav-links, .nav-menu, nav ul"
    );

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");

            const isExpanded =
                navMenu.classList.contains("active");

            menuToggle.setAttribute(
                "aria-expanded",
                isExpanded
            );
        });
    }

    // Close menu after clicking a navigation link
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            if (navMenu) {
                navMenu.classList.remove("active");
            }

            if (menuToggle) {
                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }
        });
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(
        function (link) {
            link.addEventListener("click", function (event) {
                const targetId = this.getAttribute("href");

                if (!targetId || targetId === "#") {
                    return;
                }

                const targetElement =
                    document.querySelector(targetId);

                if (targetElement) {
                    event.preventDefault();

                    targetElement.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            });
        }
    );

    // Active Navigation Link on Scroll
    const sections = document.querySelectorAll(
        "section[id]"
    );

    function updateActiveLink() {
        let currentSection = "";

        sections.forEach(function (section) {
            const sectionTop =
                section.getBoundingClientRect().top;

            if (sectionTop <= 150) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(function (link) {
            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                "#" + currentSection
            ) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", updateActiveLink);

    updateActiveLink();

    // Automatically Update Footer Year
    const yearElement = document.querySelector(
        "#current-year, #year"
    );

    if (yearElement) {
        yearElement.textContent =
            new Date().getFullYear();
    }

    // Back to Top Button
    const backToTop = document.querySelector(
        "#back-to-top, .back-to-top"
    );

    if (backToTop) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 300) {
                backToTop.style.display = "block";
            } else {
                backToTop.style.display = "none";
            }
        });

        backToTop.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // Console Message
    console.log(
        "S. Srinivasan Portfolio Website loaded successfully!"
    );

});
