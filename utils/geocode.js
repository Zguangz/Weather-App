const request = require("request");

const geocode = (address, callback) => {
  const access_token =
    "pk.eyJ1IjoibHpndWFuZ3psIiwiYSI6ImNrOTNzOXpvbTA1bTMzZG9scGRrdDR4bGUifQ.Ehg8tUQVwOuAgrNnwmb-9g";
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=" +
    access_token +
    "&limit=1"; //encodeURIComponent can handle special inputs like '?'

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location service!", undefined);
    } else if (response.body.features.length === 0) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name,
      });
    }
  });
};

module.exports = { geocode: geocode };
