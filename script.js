const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("active");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    const navigationLinks = document.querySelectorAll(".nav-links a");
    navigationLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}

const starsLayer = document.getElementById("stars-layer");
if (starsLayer) {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < 150; i += 1) {
        const star = document.createElement("span");
        star.className = "star";
        const size = (Math.random() * 2.6 + 1).toFixed(2);
        const left = (Math.random() * 100).toFixed(2);
        const top = (Math.random() * 100).toFixed(2);
        const opacity = (Math.random() * 0.8 + 0.2).toFixed(2);
        const delay = (Math.random() * 4.5).toFixed(2);

        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${left}%`;
        star.style.top = `${top}%`;
        star.style.opacity = opacity;
        star.style.animationDelay = `${delay}s`;
        fragment.appendChild(star);
    }

    starsLayer.appendChild(fragment);
}

const yearElement = document.getElementById("year");
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
