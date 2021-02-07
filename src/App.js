import React from "react";
import SearchEngine from "./SearchEngine";
import "./App.css";
import "./SearchEngine.css";

export default function App() {
  return (
    <div className="App">
<div className="border containter">
      <h1>React Weather App</h1>
      <SearchEngine/>
    </div>
      <small>Open sourced by <a href="https://www.linkedin.com/in/robertafrancesconi/" target="_blank"> Roberta Francesconi</a> on <a href="https://github.com/RobertaRocks/weather-app-react" target="_blank" rel="noreferrer">GitHub</a></small>
       

</div>

  );
}
