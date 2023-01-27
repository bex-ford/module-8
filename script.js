var APIKey = "51428ecdc304ebd2414d4b687653181a";
// var queryURL = "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}" + userInput + "&appid=" + APIKey;
var userInput = "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=51428ecdc304ebd2414d4b687653181a";

// We then created an AJAX call
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  // Create CODE HERE to Log the queryURL
  console.log(queryURL);
  // Create CODE HERE to log the resulting object
  console.log(response);
});



//   // Create CODE HERE to calculate the temperature (converted from Kelvin)
//   var celsiusTemperature = Math.floor(response.main.temp - 273.15);
//   // Create CODE HERE to transfer content to HTML
//   var myTempDiv = $('.temp');
//   myTempDiv.text(celsiusTemperature + " degrees Celsius");
//   var city = response.name;
//   var humidity = response.main.humidity;
//   var wind = response.wind.speed;
//   $('.city').text("Weather for " + city);
//   $('.humidity').text("Relative humidity: " + humidity + "%");
//   $('.wind').text("Wind speed: " + wind + " m/s");
//   // Hint: To convert from Kelvin to Celsius: C = K - 273.15
//   // Create CODE HERE to dump the temperature content into HTML

// });