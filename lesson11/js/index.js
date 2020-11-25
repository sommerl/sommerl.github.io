const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        let towns = jsonObject['towns'];
        towns = towns.filter(town => (town.name === 'Preston' || town.name ==='Soda Springs' || town.name === 'Fish Haven'))
        for (let i = 0; i < towns.length; i++) {
            let town = document.createElement('section');
            let h2 = document.createElement('h2');
            let image = document.createElement('img');
            let motto = document.createElement('p');
            let yF = document.createElement('p');
            let cP = document.createElement('p');
            let aR = document.createElement('p');


            h2.textContent = towns[i].name;
            motto.textContent = towns[i].motto;
            image.setAttribute('src', `images/${towns[i].photo}`);
            yF.textContent = "Year Founded: " + towns[i].yearFounded;
            cP.textContent = "Current Population: " + towns[i].currentPopulation;
            aR.textContent = "Average Rainfall: " + towns[i].averageRainfall;


            town.appendChild(h2);
            town.appendChild(motto);
            town.appendChild(image);
            town.appendChild(yF);
            town.appendChild(cP);
            town.appendChild(aR);

            document.querySelector('div.towninfo').appendChild(town);
        }
    });

