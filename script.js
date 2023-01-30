const APIKey = "01870a3b381625539cc05bdbee086543"; // API key
//moment.js
const currentDate = moment().format("DD/M/YYYY");
let searchForm = document.querySelector("#search-form");
let searchInput = document.querySelector("#search-input");
let searchBtn = document.querySelector("#search-button");
let city = searchInput.value;

function handleSearchForm(e) {
  if (!searchInput.value) {
    return;
  }
  e.preventDefault();
  let city = searchInput.value.trim();
  console.log(city);
  searchWeather(city);
}
function searchWeather(city) {
  let queryURL =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    APIKey;

  fetch(queryURL)
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        document.body.append("error getting coords");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => console.log(err));
}

function currentWeather(search) {
  let city = getCoords(search);
  let lat = getCoords(city);
  let lon = getCoords(city);
  console.log(lat, lon, city);
  console.log(city);

  let queryURL =
    "http://api.openweathermap.org/data/2.5/weather?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=" +
    APIKey;

  fetch(queryURL)
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        console.log("response is not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => console.log(err));
  currentWeather("");
}
searchForm.addEventListener("submit", handleSearchForm);
