const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=3530103&units=imperial&appid=290e5c7b68ca4a803da90608515efd48";


fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current-temp').textContent = jsObject.main.temp;
        document.getElementById('high-temp').textContent = jsObject.main.temp_max;
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('current').textContent = jsObject.weather[0].description.toUpperCase();
    });

    const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=3530103&units=imperial&appid=290e5c7b68ca4a803da90608515efd48";
    const IconURL = "https://openweathermap.org/img/w/";
    const daysAbv = ["Sun", 'Mon', "Tue", "Wed", "Thur", "Fri", "Sat"];
    
    fetch(forecastURL)
        .then((response) => response.json())
        .then((threedays) => {
            console.log(threedays);
    
            const threeat1800 = threedays.list.filter(x => new Date(x.dt_txt).getHours() == 18);
            console.log(threeat1800);
    
            for (let i = 2; i < threeat1800.length; i++) {
                let li = document.createElement('li');
                let day = document.createElement('p');
                let icon = document.createElement('img');
                let temp = document.createElement('p');
    
                let date = new Date(threeat1800[i].dt_txt);
                day.textContent = daysAbv[date.getDay()];
    
                icon.src = IconURL + threeat1800[i].weather[0].icon + ".png";
                temp.textContent = threeat1800[i].main.temp + "°F";
    
                li.append(day);
                li.append(icon);
                li.append(temp);
    
                document.getElementById('three-day-forecast').appendChild(li);
    
            }
        });

