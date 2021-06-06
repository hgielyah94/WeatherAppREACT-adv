import React, { useState }from "react";
import "./Weather.css";
import axios from "axios";
import Loader from "react-loader-spinner";
//import SearchEngine from "./SearchEngine";
//import ChangeCity from "./ChangeCity";

export default function Weather() {
const [ready, setReady] = useState(false);
const [weatherData, setWeatherData] = useState({});
function handleResponse(response) {
  console.log(response.data);
  setWeatherData({
    city: response.data.name,
    country: response.data.sys.country,
    temp: response.data.main.temp,
    pressure: response.data.main.pressure,
    humidity: response.data.main.humidity,
    wind: response.data.wind.speed,
    description: response.data.weather[0].description,
    });

  setReady(true);
}

if (ready) {
  return (
  <div className="Weather">
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h1 className="locationIcon"><i className="fas fa-map-marker-alt"></i></h1>
        </div>
        <div className="col-6">
          <form id="search-city">
            <input
              type="search"
              className="button"
              placeholder="Enter a city"
              autoComplete="off"
              id="searchTextInput"
            />
            <input type="submit" className="button" value="Search" />
          </form>
          <h6>
            <a id="current-location-link" href="">Use current location</a>
          </h6>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h1 id="city">{weatherData.city}, {weatherData.country}</h1>
            <h4 className="localTime">Monday 30th November, 18:38 GMT</h4>
          </div>
          <div className="col-4"></div>

          <div className="col-12"></div>

          <div className="col-2"></div>
          <div className="col-2">
            <h1 class="mainWeatherIcon"><i class="fas fa-cloud-sun"></i></h1>
          </div>
          <div className="col-2">
            <h1 id="main-temp">{Math.round(weatherData.temp)}</h1>
          </div>
          <div className="col-2">
            <h3>
              <a id="celsius-link" href="#">℃</a> |
              <a id="fahrenheit-link" href="#">℉</a>
            </h3>
          </div>
          <div className="col-4">
            <h4 id="description">{weatherData.description}</h4>
            <p id="pressure">Pressure: {weatherData.pressure}</p>
            <p id="humidity">Humidity: {weatherData.humidity}%</p>
            <p id="wind">Wind: {Math.round(weatherData.wind)}km/h</p>
          </div>
        </div>
        </div>
        </div>
        </div>

  );
} else {
  const apiKey = "412762c69ffee39720322107567a71c2";
  const units = "metric"
  let city ="London";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="container loader">
      <div className="row">
      <Loader
        type="Puff"
        color="blue"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
      </div>
      </div>
    );
}
}