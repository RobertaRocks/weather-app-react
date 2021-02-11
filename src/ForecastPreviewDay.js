import React from "react";
import "./Forecast.css";

export default function ForecastPreviewDay (props) {

function days() {
let date = new Date(props.forecastDay.dt * 1000);
let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
let day = days[date.getDay()];


return `${day}`;
}



function temperature () {
let temperature = Math.round(props.forecastDay.main.temp);
return `${temperature}`;
}

function descr () {
let descr = (props.descrDay);
return `${descr}`;

}

return (

<div className="col-3">
<span className="hour-for">{days()}</span>
<img className="weather-icon-small" src={`http://openweathermap.org/img/wn/${props.iconDay}.png`}  alt="img"  />
<span className="forecast-cel"> <b>{temperature()}</b>°C</span><br></br>
</div>

);

}