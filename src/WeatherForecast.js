import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherForecastDay from "./WeatherForecastDay";


export default function WeatherForecast(props) {
const [loaded, setLoaded] = useState(false);
const [forecastData, setforecastData] = useState(null);

function handleResponse(response) {
    setforecastData(response.data.daily);
    setLoaded(true);
}

console.log(props);

if (loaded) {
    console.log(forecastData);
return (
    <div className="forecast">
        <div className="col-12"></div>
        {forecastData.map(function(dailyForecast, index) {
            if (index > 0 && index < 7) {
            return (
            <div className="col-2" id="weatherDays" key={index}>
            <WeatherForecastDay data={dailyForecast} />
        </div>
            );
            }
        })}
          <div className="col-12"></div>
          </div>
    );

} else {
const apiKey = "0fd53f7affdf277c9962be552ec9b405";
const units = "metric";
let longitude = props.coordinates.lon;
let latitude = props.coordinates.lat;
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

axios.get(apiUrl).then(handleResponse);
console.log(apiUrl);

return null;

}
}