import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState(false);
  const [weather, setWeather] = useState("");

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search for a city"
        onChange={updateCity}
      />
      <button type="submit">Search</button>
    </form>
  );

  function displayWeather(response) {
    setResult(true);
    console.log(response);
    setWeather({
      cityName: response.data.name,
      country: response.data.sys.country,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      windspeed: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(city);
    let apiKey = "3a94f3778290bfeee61278505dbbe51d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    console.log(apiUrl);
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  if (result === true) {
    return (
      <div>
        {form}
        <h2>
          {weather.cityName}, {weather.country}
        </h2>
        <h3>{weather.description}</h3>
        <ul>
          <li>Temperature: {weather.temperature}°C</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.windspeed}km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
