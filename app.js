const request = require("request");

// const url =
//   "https://api.data.gov.sg/v1/environment/air-temperature?date=2020-04-17";

const url =
  "http://api.weatherstack.com/current?access_key=ad85093133574d10ebff376dc6e2e87f&query=New York";

request({ url: url, json: true }, (error, response) => {
  console.log(
    response.body.current.weather_descriptions[0] +
      ". It is currently " +
      response.body.current.temperature +
      " degree at " +
      response.body.location.name +
      "."
  );
});
