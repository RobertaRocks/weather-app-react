import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import Forecast from "./Forecast";
import axios from "axios";


export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [loaded, setLoaded] = useState(false);

  function getCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function getTemp(event) {
    event.preventDefault();
    let apiKey = "b1d85d3727e610039e9f3b93d686021e";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(showTemp);
  }

  function showTemp(response) {
    setLoaded (true);
    setWeather({
      temp: Math.round(response.data.main.temp),
      hum: response.data.main.humidity,
      descr: response.data.weather[0].main,
      wind: response.data.wind.speed,
      country: response.data.sys.country,
      city: response.data.name,
      currentDate: 
                  new Date(response.data.dt * 1000).getHours() 
                  + ':' + 
                  new Date(response.data.dt * 1000).getMinutes() 

  
  })};

 
  let form = (

    <form onSubmit={getTemp} className="form-inline input-group">
      <input type="search" className="form-control in-line mr-sm" placeholder="Enter a City" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={getCity} />
      <button type="submit" className="btn btn-outline-secondary my-sm-0 searchbtn"> Search</button>
    </form>

  );

  if (loaded) {
    return (
      <div>
        {form}
        
          <h2>{city}, {weather.country}</h2>
          <h3>{weather.descr}</h3>

          <div className="row">
            
              <img className="weather-icon col-7" src={`/img/${weather.descr}.gif`} alt="img" />{" "}
                <WeatherTemperature celsius={weather.temp}/>
             
         
           </div>

        <ul className="results">
          <li> Humidity: {weather.hum}% </li>
          <li> Wind: {weather.wind} km/h</li>
        <li> {weather.currentDate} </li>   
        </ul>
        <Forecast city={city} descr={weather.descr}/>
      </div>
    );
  } else {return form}
}
