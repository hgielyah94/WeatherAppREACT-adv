import React from "react";

export default function FormatDate(props) {
  console.log(props.date);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];


  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

let dates = [
  "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
  "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
  "21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
  "31",
]



  let currentYear = props.date.getFullYear();
  let month = months[props.date.getMonth()];
  let currentDate = (dates[props.date.getDate()] - 1);
if (currentDate === "1" || currentDate === "21" || currentDate === "31") {
  currentDate = `${currentDate}st`;
} else if (currentDate === "2" || currentDate === "22") {
  currentDate = `${currentDate}nd`;
} else if (currentDate === "3" || currentDate === "23") {
  currentDate = `${currentDate}rd`;
} else {
currentDate = `${currentDate}th`;
}

  console.log(currentYear);
  console.log(month);
  console.log(currentDate);
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }


  return (
    <div>
      {day} {currentDate} {month} {currentYear} <br />
      Local time: {hours}:{minutes} 
    </div>
  );
}