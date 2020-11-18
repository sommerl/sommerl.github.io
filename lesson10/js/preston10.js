const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=290e5c7b68ca4a803da90608515efd48";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current-temp').textContent = jsObject.main.temp;
        document.getElementById('high-temp').textContent = jsObject.main.temp_max;
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('wind-speed').textContent = jsObject.wind.speed;
        document.getElementById('current').textContent = jsObject.weather.main;
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; 
        const desc = jsObject.weather[0].description;  
        document.getElementById('imagesrc').textContent = imagesrc;  
        document.getElementById('icon').setAttribute('src', imagesrc); 
        document.getElementById('icon').setAttribute('alt', desc);
    });

    const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=290e5c7b68ca4a803da90608515efd48";

    fetch(forecastURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.log(jsonObject);
        const forecast = jsonObject['forecast'];
        for (let i = 0; i < forecast; i++) {
        document.getElementById('monday').textContent = jsObject.main.temp;
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; 
        const desc = jsObject.weather[0].description;  
        document.getElementById('imagesrc').textContent = imagesrc;  
        document.getElementById('icon').setAttribute('src', imagesrc); 
        document.getElementById('icon').setAttribute('alt', desc);
        }
    });

