import React from "react";

export default function FormattedDate(props) {
let day = props.currentDate.getDay();
let month = props.currentDate.getMonth() ;
let year =  props.currentDate.getFullYear() ;
let hours = props.currentDate.getHours() ;
let minutes = props.currentDate.getMinutes() ;
let seconds = props.currentDate.getSeconds();
  return (
    <div>
      {day}-{month}-{year} {hours}:{minutes}:{seconds}
    </div>
  );

}