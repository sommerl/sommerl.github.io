function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

function selectResponse() {
	const s = document.querySelector('#selected')
	const sel = document.querySelector('#selectbrowser');
	s.style.display = "block";
	s.textContent = sel.value;
	
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
    