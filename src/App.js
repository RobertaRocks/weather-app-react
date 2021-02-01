import React from "react";
import SearchEngine from "./SearchEngine";
import "./App.css";


export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchEngine />
      <small>View this project on my <a href="https://github.com/RobertaRocks/weather-app-react" target="_blank" rel="noreferrer"> Github</a></small>
    </div>
  );
}
