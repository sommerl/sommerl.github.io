const requestURL = "https://github.com/sommerl/sommerl.github.io/blob/master/scoots/data/rentals.json";
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const rentals = jsonObject['rentals'];
    for (let i = 0; i < rentals.length; i++) {
      let table = document.createElement('table');
      let th = document.createElement('th');
      let mp = document.createElement('th');
      let rs = document.createElement('th');
      let hdr = document.createElement('th');
      let fdr = document.createElement('th');
      let hdw = document.createElement('th');
      let fdw = document.createElement('th');
      let p = document.createElement('td');


      th.textContent = rentals[i].rentaltype;
      mp.textContent = rentals[i].maxpersons;
      rs.textContent = rentals[i].reservations;
      hdr.textContent = rentals[i].halfdayr;
      fdr.textContent = rentals[i].fulldayr;
      hdw.textContent = rentals[i].halfdayw
      fdw.textContent = rentals[i].fulldayw;
      p.textContent = rentals[i].fulldayr

      table.appendChild(th);
      table.appendChild(mp);
      table.appendChild(rs);

      document.querySelector('div.table').appendChild(table);
    }
  });

