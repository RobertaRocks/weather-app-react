import React from "react";
import "./Forecast.css";

export default function ForecastPreview (props) {

function hours() {
let date = new Date(props.forecast.dt * 1000);
let hours = date.getHours();
return `${hours}:00`;
}

function temperature () {
let temperature = Math.round(props.forecast.main.temp);
return `${temperature}`;
}

return (

<div className="col-3">
<span className="hour-for">{hours()}</span>
<img className="weather-icon-small" src={`http://openweathermap.org/img/wn/${props.icon}.png`}  alt="img"  />
<span className="forecast-cel"> <b>{temperature()}</b>°C</span>
</div>



);

}