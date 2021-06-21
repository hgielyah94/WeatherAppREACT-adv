import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function WeatherForecastDay(props) {

    function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
return days[day];
    }

return (
    <div className="WeatherForecastDay">
    <WeatherIcon code={props.data.weather[0].icon} size={64}/>
         <h2><strong>{Math.round(props.data.temp.day)}℃</strong></h2>
        <h5>{day()}</h5>
     </div>
);
}