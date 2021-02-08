import React from "react";

export default function FormattedDate(props) {
let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[props.currentDate.getDay()];
  let fulldate= [props.currentDate.getDate()];
  let months = [ "January", "February", "March", "April","May","June", "July", "August", "September","October","November", "December"];
  let month = months[props.currentDate.getMonth()];

  let hours = props.currentDate.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  
  let minutes = props.currentDate.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
   Last updated on {day} {fulldate} {month} {hours}:{minutes}
    </div>
  );

}