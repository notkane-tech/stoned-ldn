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