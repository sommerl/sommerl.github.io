const imagesToLoad = document.querySelectorAll('.imgloader');

function preloadPicture(picture) {
  const images = picture.querySelectorAll('[data-src]');
  const sources = picture.querySelectorAll('[data-srcset]')

  images.forEach(img => {
      preloadImage(img);
  })

  sources.forEach(source => {
    preloadSource(source);
  })
}

function preloadImage(img) {
  const src = img.getAttribute("data-src");
  if (!src){
    return;
  }
  img.src = src;
  img.removeAttribute('data-src');
}

function preloadSource(source) {
  const srcset = source.getAttribute("data-srcset");
  if(!srcset){
    return;
  }
  source.srcset = srcset;
  source.removeAttribute('data-srcset')
}

const picOptions = {
  threshold: 0,
  rootMargin: "0px 0px 750px 0px"
}

const picObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
       preloadPicture(entry.target);
       imgObserver.unobserve(entry.target);
    }
  })
}, picOptions);

pictures.forEach(picture => {
  picObserver.observe(picture);
})

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
 image.setAttribute('src', image.getAttribute('data-src'));
 image.onLoad = () => {image.removeAttribute('data-src');};
};

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }
