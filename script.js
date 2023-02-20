// Assign API key to a variable
let APIKey = "fe3209cca110c675761038ad84996ecc";

// Using moment.js to store date
let currentDate = moment().format("DD/M/YYYY");

// Store input values in variables
let searchForm = document.getElementById("search-form");
let searchInput = document.getElementById("search-input");
let cityName = document.getElementById("current-city");
let tempEl = document.getElementById("temperature");
let windEl = document.getElementById("wind");
let humidityEl = document.getElementById("humidity");

// Store city as variable with the value of search input
let city = "";

// Function to handle search form
const handleSubmit = (e) => {
  e.preventDefault();
};

// Function to get current weather
function currentWeather(e) {
  e.preventDefault();
  const search = searchInput.value;
  getCoords(search);
}

// Function to query API for weather
function getCoords(city) {
  let queryURL =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    city +
    "&appid=" +
    APIKey;

  fetch(queryURL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // console.log(data);
      const lat = data[0].lat;
      const lon = data[0].lon;
      getWeather(lat, lon);
      getForecast(lat, lon);
    })
    .catch((err) => console.log(err));
}

function getWeather(lat, lon) {
  // Build API based on inputs
  let queryURL =
    "http://api.openweathermap.org/data/2.5/weather?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=" +
    APIKey;

  fetch(queryURL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      cityName.textContent = data.name;
      //  let locationIcon = document.querySelector('.weather-icon');
      //  const {icon} = data.weather[0].icon;
      //  locationIcon.innerHTML = `<img src="http://openweathermap.org/img/w/${icon}.png">`;
      tempEl.textContent = " " + data.main.temp;
      windEl.textContent = " " + data.wind.speed;
      humidityEl.textContent = " " + data.main.humidity;
    })
    .catch((err) => console.log(err));
}

function getForecast(lat, lon) {
  let days = 5;
  // Build API based on inputs
  let queryURL =
    "http://api.openweathermap.org/data/2.5/forecast?lat=" +
    lat +
    "&lon=" +
    lon +
    "&cnt" +
    days +
    "&appid=" +
    APIKey;

  fetch(queryURL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // use for loop
      // append to ID in HTML to a 5 day forecast
      cityName.textContent = data.name;
    });
}

searchForm.addEventListener("submit", currentWeather);
