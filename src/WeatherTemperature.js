import React, { useState } from "react";

export default function WeatherTemperature(props) {
const [unit, setUnit] = useState("celsius");
function convertToFarenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
}

function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
}

function fahrenheit() {
 return (props.celsius * 9) /5 + 32;
}

if (unit === 'celsius') {

return (
<span>
<div id="unitTemp">
    <h1 id="main-temp">{Math.round(props.celsius)}</h1>
</div>
<div id="unitTemp">
        <h3 className="main-temp" id="celsius-link-clicked">
           ℃ </h3> <h2 className="main-temp">|</h2>
            <h3 className="main-temp"><a id="fahrenheit-link" href="#" onClick={convertToFarenheit}>℉</a>
        </h3>
</div>
</span>
);
} else {
return (
<span>
 <div id="unitTemp">
     <h1 id="main-temp">{Math.round(fahrenheit())}</h1>
</div>
<div id="unitTemp">
        <h3 className="main-temp"><a id="celsius-link" href="#" onClick={convertToCelsius}>
           ℃ </a></h3> <h2 className="main-temp">|</h2>
            <h3 className="main-temp" id="fahrenheit-link-clicked">℉</h3>
</div>
</span>
);
}
}