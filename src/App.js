import React from "react";
import Weather from "./Weather";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="London"/>
      <br />
      <footer>
    <p>Coded by Hayleigh <br /><a href="https://github.com/hgielyah94/WeatherAppREACT-basic-" target="_blank" rel="noreferrer">Open-sourced on GitHub</a></p>
    </footer>
    </div>
    </div>
  );
}
