const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=290e5c7b68ca4a803da90608515efd48";


fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current-temp').textContent = jsObject.main.temp;
        document.getElementById('high-temp').textContent = jsObject.main.temp_max;
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('wind-speed').textContent = jsObject.wind.speed;
        document.getElementById('current').textContent = jsObject.weather[0].description.toUpperCase();

        let windchill;
            if ('current-temp' <= 50.0 && 'wind-speed' > 3.0) {
                windchill = 35.74 + (0.6215 * 'current-temp') - (35.75 * Math.pow('wind-speed',0.16)) + (0.4275 * 'current-temp' * Math.pow('wind-speed',0.16)) + "°F";
            }
            else {
                windchill = "N/A"
            }
            
             document.getElementById('windchill').textContent = windchill;
    
    });

    

const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=290e5c7b68ca4a803da90608515efd48";
const IconURL = "https://openweathermap.org/img/w/";
const daysAbv = ["Sun", 'Mon', "Tue", "Wed", "Thur", "Fri", "Sat"];

fetch(forecastURL)
    .then((response) => response.json()) 
    .then((fivedays) => {
        console.log(fivedays);

        const fiveat1800 = fivedays.list.filter(x => new Date(x.dt_txt).getHours() == 18 );
        console.log(fiveat1800);

        for (let i = 0; i < fiveat1800.length; i++) {
            let li = document.createElement('li');
            let day = document.createElement('p');
            let icon = document.createElement('img');
            let temp = document.createElement('p');
            
            let date = new Date(fiveat1800[i].dt_txt);
            day.textContent = daysAbv[date.getDay()];

            icon.src = IconURL + fiveat1800[i].weather[0].icon + ".png";
            temp.textContent = fiveat1800[i].main.temp + "°F";

            li.append(day);
            li.append(icon);
            li.append(temp);

            document.getElementById('five-day-forecast').appendChild(li);

        }
});


const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        let towns = jsonObject['towns'];
        towns = towns.filter(town => (town.name === 'Preston'))
        for (let i = 0; i < towns.length; i++) {
            let town = document.createElement('section');
            let event = document.createElement('p');


            event.textContent = towns[i].events[0];
            event.textContent = towns[i].events[1];
        
            

            town.appendChild(event);

            document.querySelector('div.eventinfo').appendChild(town);
        }
    });

