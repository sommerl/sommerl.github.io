window.onload = updateBox;

function updateBox(){
    let date= new Date() .getFullYear();
    let d= new Date();
    let Monthday = d.getDate();
    let days= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    document.getElementById('updated').innerHTML = days [d.getDay()] + ', ' + monthDay + ' ' + monthNames[d.getMonth()] + ' ' + date;
}

function toggleMenu(){
    document.getElementById("mainNav").classList.toggle("hide");
}