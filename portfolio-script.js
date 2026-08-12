
    
// ========================================
// S. SRINIVASAN - PORTFOLIO JAVASCRIPT
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    // -------------------------------
    // Smooth scrolling
    // -------------------------------
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId && targetId.startsWith("#")) {

                event.preventDefault();

                const targetSection = document.querySelector(targetId);

                if (targetSection) {

                    targetSection.scrollIntoView({
                        behavior: "smooth"
                    });

                }
            }
        });

    });


    // -------------------------------
    // Active navigation menu
    // -------------------------------

    const sections = document.querySelectorAll("section[id]");

    window.addEventListener("scroll", function () {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        navLinks.forEach(function (link) {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("active");
            }

        });

    });


    // -------------------------------
    // Scroll reveal animation
    // -------------------------------

    const revealElements = document.querySelectorAll(
        ".skill-card, .project-card, .education-card, .cert-card, .timeline-card, .about-box"
    );

    const revealObserver = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    revealElements.forEach(function (element) {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });


    // -------------------------------
    // Current year in footer
    // -------------------------------

    const yearElement = document.querySelector("#current-year");

    if (yearElement) {

        yearElement.textContent = new Date().getFullYear();

    }


    // -------------------------------
    // Mobile menu
    // -------------------------------

    const navbar = document.querySelector(".navbar");
    const menuButton = document.querySelector(".menu-button");

    if (menuButton && navbar) {

        menuButton.addEventListener("click", function () {

            navbar.classList.toggle("mobile-open");

        });

    }


    // -------------------------------
    // Close mobile menu after click
    // -------------------------------

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (navbar) {

                navbar.classList.remove("mobile-open");

            }

        });

    });

});
