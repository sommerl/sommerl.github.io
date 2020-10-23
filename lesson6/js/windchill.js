function windChill() {
let t = parseFloat(document.querySelector(".temperature").innerHTML);
let s = parseFloat(document.querySelector(".windspeed").innerHTML);
if (t <= 50.0 && s > 3.0) {
    let chillElement = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s,0.16)) + (0.4275 * t * Math.pow(s,0.16))
    document.querySelector(".chill").innerHTML = Math.ceil(chillElement)
}

else {
    document.querySelector(".chill").innerHTML = "N/A"
}
}