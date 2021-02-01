import React, { useState } from "react";
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
      icon: `https://openweathermap.org/img/w/${response.data.weather[0].icon}.png`
    });
  }

  let form = (

    <form onSubmit={getTemp} className="form-inline input-group">
      <input type="search" className="form-control mr-sm-2" placeholder="Enter a City" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={getCity} />
      <button type="submit" className="btn btn-outline-secondary my-2 my-sm-0"> Search</button>
    </form>

  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>
            {" "}
            In {city}: {Math.round(weather.temp)}°C{" "}
          </li>
          <li> Humidity: {weather.hum}% </li>
          <li> Sky: {weather.descr}</li>
          <li> Wind: {weather.wind} km/h</li>
          <li>
            {" "}
            <img src={weather.icon} alt="img" />{" "}
          </li>
        </ul>
      </div>
    );
  } else {return form}
}
