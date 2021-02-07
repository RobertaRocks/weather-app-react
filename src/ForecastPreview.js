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

<div className="col-4">
<span className="hour-for">{hours()}</span>
<br></br>
<img className="weather-icon col-2" src={`/img/${props.descr}.gif`} alt="img" />
<br></br>
<span className="forecast-cel"> <b>{temperature()}</b>°C</span>
</div>

);

}