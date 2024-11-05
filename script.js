const gallery = document.querySelector('.gallery');
const images = document.querySelectorAll('.portrait');
let isDragging = false;
let startX;
let scrollLeft;

gallery.addEventListener('mousedown', (e) => {
    isDragging = true;
    gallery.classList.add('active');
    startX = e.pageX - gallery.offsetLeft;
    scrollLeft = gallery.scrollLeft;
});

gallery.addEventListener('mouseleave', () => {
    isDragging = false;
    gallery.classList.remove('active');
});

gallery.addEventListener('mouseup', () => {
    isDragging = false;
    gallery.classList.remove('active');
});

gallery.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - gallery.offsetLeft;
    const walk = (x - startX) * 3; // Adjust scroll speed
    gallery.scrollLeft = scrollLeft - walk;
    applyParallaxEffect();
});

// Touch Events for Mobile
gallery.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].pageX - gallery.offsetLeft;
    scrollLeft = gallery.scrollLeft;
});

gallery.addEventListener('touchend', () => {
    isDragging = false;
});

gallery.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.touches[0].pageX - gallery.offsetLeft;
    const walk = (x - startX) * 3; // Adjust scroll speed
    gallery.scrollLeft = scrollLeft - walk;
    applyParallaxEffect();
});

function applyParallaxEffect() {
    const scrollPosition = gallery.scrollLeft;
    images.forEach((image, index) => {
        const depth = 0.02 * (index + 1);
        const scale = 1 + scrollPosition * depth * 0.0001;
        const limitedScale = Math.min(1.1, Math.max(1, scale));
        image.style.transform = `scale(${limitedScale})`;
    });
}
