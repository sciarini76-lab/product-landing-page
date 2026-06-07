document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        // Alterna la classe "active" sia al menu che all'hamburger (per animare le barre)
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Opzionale: chiude il menu se clicchi su un link
    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));
});