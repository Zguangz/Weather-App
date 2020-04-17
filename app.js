const request = require("request");

// const url =
//   "https://api.data.gov.sg/v1/environment/air-temperature?date=2020-04-17";

// const url =
//   "http://api.weatherstack.com/current?access_key=ad85093133574d10ebff376dc6e2e87f&query=New York";

// request({ url: url, json: true }, (error, response) => {
//   console.log(
//     response.body.current.weather_descriptions[0] +
//       ". It is currently " +
//       response.body.current.temperature +
//       " degree at " +
//       response.body.location.name +
//       "."
//   );
// });

// Geocoding
const geoCodeURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibHpndWFuZ3psIiwiYSI6ImNrOTNzOXpvbTA1bTMzZG9scGRrdDR4bGUifQ.Ehg8tUQVwOuAgrNnwmb-9g&limit=1";
request({ url: geoCodeURL, json: true }, (error, response) => {
  const latitude = response.body.features[0].center[1];
  const longitude = response.body.features[0].center[0];
  console.log(latitude, longitude);
});
