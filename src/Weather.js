import React, { useState } from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo"
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props) {
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
    });
}

function search() {
  const apiKey = "785fc68afdfb95b78288ff6fb91c5ed0";
  const units = "metric"
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

function updateCity(event) {
    setCity(event.target.value);
  }

if (weatherData.ready) {
  return (
  <div className="Weather">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <form id="search-city" onSubmit={handleSubmit}>
            <input
              type="search"
              className="button"
              placeholder="Enter a city"
              autoComplete="off"
              id="searchTextInput"
              onChange={updateCity}
            />
            <input type="submit" className="button" value="Search" />
          </form>
          <WeatherInfo data={weatherData}/>
          </div>
        </div>
        </div>
        </div>
          );
} else {
  search();
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