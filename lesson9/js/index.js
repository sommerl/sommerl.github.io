const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    for (let i = 0; i < town.length; i++ ) {
        let towninfo = document.createElement('section');
      let h2 = document.createElement('h2');
      let image = document.createElement('img');
      let motto = document.createElement('p');
      let yF = document.createElement('p');
      let cP = document.createElement('p');
      let aR = document.createElement('p');

      
      h2.textContent = town[i].name + ' ' + town[i].lastname;
      image.setAttribute('src', town[i].photo);
      motto.textContent = "Motto: " + town[i].motto;
      yF.textContent = "Year Founded: " + town[i].yearFounded;
      cP.textContent = "Current Population: " + town[i].currentPopulation;
      aR.textContent = "Average Rainfall: " + town[i].averageRainfall;
      
      
      card.appendChild(h2);
      
      document.querySelector('div.towninfo').appendChild(card);}
       });
     