document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('open');
    });
});

// Optional: Auto-scroll animation for the cards
const container = document.getElementById('cards-container');

let scrollAmount = 0;
const scrollStep = 2; // px per frame
const scrollDelay = 20; // ms

function autoScroll() {
    scrollAmount += scrollStep;
    if (scrollAmount >= container.scrollWidth - container.clientWidth) {
        scrollAmount = 0; // reset scroll to start
    }
    container.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
}

setInterval(autoScroll, scrollDelay);
