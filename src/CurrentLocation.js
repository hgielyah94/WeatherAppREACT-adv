import React, { useState } from "react";
import axios from "axios";

export default function CurrentLocation(props) {
const [weatherData, setWeatherData] = useState({ ready: false });
const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
  console.log(response.data);
  setWeatherData({
    ready: true,
    city: response.data.name,
    country: response.data.sys.country,
    temp: response.data.main.temp,
    pressure: response.data.main.pressure,
    humidity: response.data.main.humidity,
    wind: response.data.wind.speed,
    description: response.data.weather[0].description,
    date: new Date (response.data.dt * 1000),
    icon: response.data.weather[0].icon,
    latitude: response.data.coord.lat,
    longitude: response.data.coord.lon,
    });
}


function search() {
  let units = "metric";
  let apiKey = "785fc68afdfb95b78288ff6fb91c5ed0";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${props.latitude}&lon=${props.longitude}&appid=${apiKey}&units=${units}`;
  console.log(apiUrl);
  axios.get(apiUrl).then(handleResponse);
}



    function handleSubmit(response) {
    console.log(response.data);
    CurrentLocation();
    }

    return (


      
    <div>
        <h6>
      <a id="current-location-link" href="" onClick={handleSubmit}>Use current location</a>
          </h6>
        </div>
    );
    }