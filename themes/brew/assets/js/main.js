// Brewery Brushstroke Theme - Interactive Effects

document.addEventListener("DOMContentLoaded", function () {
  console.log("Brewery theme loaded with brushstroke effects");

  // Add animated brushstroke trails to section hover
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)";
      this.style.boxShadow = "0 8px 24px rgba(93, 64, 55, 0.15)";
      this.style.transition = "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)";
    });

    section.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
      this.style.boxShadow = "none";
    });
  });

  // Add paint drip effect on main heading hover
  const mainHeading = document.querySelector("header h1");
  if (mainHeading) {
    mainHeading.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.02)";
      this.style.transition = "transform 0.3s ease";
    });

    mainHeading.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });
  }

  // Parallax brushstroke effect on scroll
  let ticking = false;

  function updateBrushstrokes() {
    const scrolled = window.pageYOffset;
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");

    if (header) {
      const headerBrush = header.querySelector("::after");
      if (scrolled > 10) {
        header.style.transform = `translateY(${scrolled * 0.1}px)`;
      }
    }

    ticking = false;
  }

  window.addEventListener("scroll", function () {
    if (!ticking) {
      window.requestAnimationFrame(updateBrushstrokes);
      ticking = true;
    }
  });

  // Add stagger animation to navigation items
  const navItems = document.querySelectorAll("nav li");
  navItems.forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(-10px)";

    setTimeout(() => {
      item.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    }, 100 * index);
  });

  // Add brushstroke reveal animation to sections on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        sectionObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition =
      "opacity 0.8s ease, transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)";
    sectionObserver.observe(section);
  });

  // Random brushstroke color variation on link hover
  const contentLinks = document.querySelectorAll("main a:not(nav a):not(h2 a)");
  const brewColors = ["#d4a574", "#c89446", "#b87333", "#5d4037"];

  contentLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      const randomColor =
        brewColors[Math.floor(Math.random() * brewColors.length)];
      this.style.backgroundImage = `linear-gradient(to right, ${randomColor}, ${randomColor})`;
    });
  });

  // Add paint splash effect on button click
  const buttons = document.querySelectorAll("button, .button");
  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      const splash = document.createElement("span");
      splash.style.position = "absolute";
      splash.style.borderRadius = "50%";
      splash.style.background = "rgba(212, 165, 116, 0.6)";
      splash.style.width = "100px";
      splash.style.height = "100px";
      splash.style.left = e.offsetX - 50 + "px";
      splash.style.top = e.offsetY - 50 + "px";
      splash.style.animation = "splash 0.6s ease-out forwards";
      splash.style.pointerEvents = "none";

      this.appendChild(splash);

      setTimeout(() => splash.remove(), 600);
    });
  });

  // Add CSS animation for splash
  if (!document.getElementById("brushstroke-animations")) {
    const style = document.createElement("style");
    style.id = "brushstroke-animations";
    style.textContent = `
            @keyframes splash {
                0% {
                    transform: scale(0);
                    opacity: 1;
                }
                100% {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
    document.head.appendChild(style);
  }
});
