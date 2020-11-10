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
      
      h2.textContent = town[i].name + ' ' + town[i].lastname;
      
      card.appendChild(h2);
      
      document.querySelector('div.towninfo').appendChild(card);}
       });
     