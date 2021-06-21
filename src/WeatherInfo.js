import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
//import CurrentLocation from "./CurrentLocation";
///<CurrentLocation latitude={props.data.latitude} longitude={props.data.longitude}/>

export default function WeatherInfo(props) {

  return (
    <div className="WeatherInfo">
      <div className="container" id="main">
        <div className="row">
          <div className="col-8">
          <div className="col-6">
            <h1 className="locationIcon"><i className="fas fa-map-marker-alt"></i></h1>
        </div>
            <h1 id="city">{props.data.city}, {props.data.country}</h1>
            <h4 className="localTime"><FormatDate date={props.data.date}/></h4>
          </div>
          <div className="col-4"></div>

          <div className="col-12"></div>

          <div className="col-2"></div>
          <div className="col-2">
            <WeatherIcon className="mainWeatherIcon" code={props.data.icon} size={128}/>
          </div>
          <div className="col-4">
            <WeatherTemperature celsius={props.data.temp}/>
          </div>
          <div className="col-4">
            <h4 id="description" className="text-capitalize">{props.data.description}</h4>
            <p id="pressure">Pressure: {props.data.pressure}</p>
            <p id="humidity">Humidity: {props.data.humidity}%</p>
            <p id="wind">Wind: {Math.round(props.data.wind)}km/h</p>
          </div>
        </div>
        </div>
        </div>

  );
}