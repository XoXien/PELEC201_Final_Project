const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
let index = 0;

document.querySelector(".next").addEventListener("click", () => {
    index = (index + 1) % slides.length;
    updateCarousel();
});

document.querySelector(".prev").addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    updateCarousel();
});

function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;
}

/* RETURN BUTTON BEHAVIOR */
document.querySelectorAll(".return-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        window.location.href = "services.html"; // <-- CHANGE TO YOUR PAGE
    });
});
