const apiURL = "api.openweathermap.org/data/2.5/weather?id=5604473&appid=4d6384241cfb8e06721808d523039337";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });

