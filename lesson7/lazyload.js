const images = document.querySelectorAll("[data-scr]");

function preloadImage(img) {
    const src = img.getAttribute("data-scr");
    if(!src) {
        return;
    }

    img.src = src;
}

const imgOptions = {};

const imageObserver = new IntersectionObserver((entries, imgObserver) => {
entries.forEach(entry => {
    if (!entry.isIntersecting) {
        return;
    } else {
        preloadImage(entry.target);
        imgObserver.unobserve(entry.target);
    }
});
}, imgOptions);

imgages.forEach(image => {
    imgObserver.observe(image);
});