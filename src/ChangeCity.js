import React from "react";


export default function ChangeCity() {

    function changeCityButton(event) {
  let changeCity = prompt("Please enter a city");
  console.log(changeCity);
    }

    

    return (
    <div><div className="col-12"></div>
    <button className="button" id="change-city" onClick={changeCityButton}>
    Change City
    </button>
    </div>
)
}
