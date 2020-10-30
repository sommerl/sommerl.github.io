
const pictures = document.querySelectorAll("img[data-src]");

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

  window.onload = updateBox;

function updateBox(){
    let date= new Date().getFullYear();
    let d= new Date();
    let monthDay = d.getDate();
    let days= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    document.getElementById('updated').innerHTML = days[d.getDay()] + ', ' + monthDay + ' ' + monthNames[d.getMonth()] + ' '+ date;
}

function toggleMenu(){
    document.getElementById("mainNav").classList.toggle("hide");
}

var dayOfWeek = new Date().getDay() // This gives us a number (1-7)

if (dayOfWeek == 5) {
    document.getElementById("big-banner").style.display = "block";
    }
    