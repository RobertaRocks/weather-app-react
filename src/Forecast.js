import React, {useState} from "react";
import axios from "axios";
import ForecastPreview from "./ForecastPreview";
import "./Forecast.css";

export default function Forecast(props) {
 const [loaded, setLoaded] = useState(false);
 const [forecast, setForecast] = useState(null);


function getForecast (response) {
setForecast(response.data);
setLoaded(true);
}

if (loaded) {


return (

<div className="forecast row"> 
<ForecastPreview forecast={forecast.list[0]} descr={props.descr} icon={props.icon}/>
<ForecastPreview forecast={forecast.list[1]} descr={props.descr} icon={props.icon}/>
<ForecastPreview forecast={forecast.list[2]} descr={props.descr} icon={props.icon}/>
<ForecastPreview forecast={forecast.list[3]} descr={props.descr} icon={props.icon}/>
<ForecastPreview forecast={forecast.list[4]} descr={props.descr} icon={props.icon}/>
<ForecastPreview forecast={forecast.list[5]} descr={props.descr} icon={props.icon}/>
</div>)




} else {
let apiKey = "b1d85d3727e610039e9f3b93d686021e";
let apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
axios.get(apiURL).then(getForecast);
return "loading";
}
}
