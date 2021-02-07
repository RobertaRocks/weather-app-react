import React, {useState} from "react";
import "./SearchEngine.css";

export default function Weathertemperature(props) {
const [unit, setUnit] = useState("celsius");

function showFar (event) {
event.preventDefault();
setUnit("far");
}

function showCel (event) {
event.preventDefault();
setUnit("celsius");
}


function far() {
return ((props.celsius *9)/5+ 32);

}


if (unit==="celsius") {
return (
 <div className="results col-6">
              <div className="degree">{Math.round(props.celsius)}{" "} 
              <span  className=" celsius-far cel">°C </span> 
              <span className="small">|</span>   
              <a hfref="/" className="celsius-far far" onClick={showFar} rel="noreferrer">°F </a>
              </div>
 </div>
);

} else {
return (
 <div className="results col-6">
              <div className="degree">{Math.round(far())}{" "} 
              <a hfref="/" className=" celsius-far cel" onClick={showCel} rel="noreferrer">°C </a> 
              <span className="small">|</span>   
              <span  className="celsius-far far">°F </span>
              </div>
 </div>
);} 



}