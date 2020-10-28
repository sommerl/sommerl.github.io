const imagesToLoad = document.querySelectorAll("img[data-scr]");

const imgOptions = {
    threshold: 0,
    rootMargin: "0px, 0px, 50px, 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('data-src');};
};

if('IntercsectionObserver' in window) {
    const imageObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
        }
    }
}