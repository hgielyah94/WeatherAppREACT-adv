import "./styles.css";
import React from "react";
import SearchEngine from "./SearchEngine";
import ChangeCity from "./ChangeCity";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>WEATHER APP</h1>
      <SearchEngine />
      <br />
      <ChangeCity />
      <footer>
    <p>Coded by Hayleigh <br /><a href="https://github.com/hgielyah94/WeatherAppREACT-basic-" target="_blank" rel="noreferrer">Open-sourced on GitHub</a></p>
    </footer>
    </div>
    </div>
  );
}
