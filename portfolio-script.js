document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section, header");
  const navLinks = document.querySelectorAll("nav ul li a");

  // Highlight active navigation menu link on scrolling
  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 150) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // Log confirmation
  console.log("S. Srinivasan Portfolio Loaded Successfully.");
});
