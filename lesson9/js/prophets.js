const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const prophets = jsonObject['prophets'];
 for (let i = 0; i < prophets.length; i++ ) {
   let card = document.createElement('section');
   let h2 = document.createElement('h2');
   let dob = document.createElement('p');
   let bp = document.createElement('p');
   let image = document.createElement('img');
   let .imageurl = document.createElement('img')
 
 h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
 image.setAttribute('src', prophets[i].imageurl);

 card.appendChild(h2);
 
 document.querySelector('div.cards').appendChild(card);}
  });

  
