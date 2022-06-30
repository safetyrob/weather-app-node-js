const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=fac22e4fbb8cd48f220f4209fd39cdb2&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weaather service", undefined);
    } else if (body.error) {
      callback("Unable to find location", url);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          ". It is currently " +
          body.current.temperature +
          " degrees out.  It feels like " +
          body.current.feelslike +
          " degrees out"
      );
    }
  });
};

module.exports = forecast;
