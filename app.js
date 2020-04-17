const request = require("request");

// const url =
//   "http://api.weatherstack.com/current?access_key=ad85093133574d10ebff376dc6e2e87f&query=33.652275,-84.121438";

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to weather service!");
//   } else if (response.body.error) {
//     console.log("Unable to find location");
//   } else {
//     console.log(
//       response.body.current.weather_descriptions[0] +
//         ". It is currently " +
//         response.body.current.temperature +
//         " degree at " +
//         response.body.location.name +
//         "."
//     );
//   }
// });

// Geocoding
const geoCodeURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/philadelpah.json?access_token=pk.eyJ1IjoibHpndWFuZ3psIiwiYSI6ImNrOTNzOXpvbTA1bTMzZG9scGRrdDR4bGUifQ.Ehg8tUQVwOuAgrNnwmb-9g&limit=1";
request({ url: geoCodeURL, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to location service!");
  } else if (response.body.features.length === 0) {
    console.log("Unable to find location. Try another search.");
  } else {
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];
    console.log(latitude, longitude);
  }
});
