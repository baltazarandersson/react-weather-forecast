import React from "react";
import "./Day.css";

export default function Day({ date, max_temp, min_temp, weather_state }) {
  return (
    <div className="day-card">
      {date}
      <img
        alt="weather icon"
        src={`https://openweathermap.org/img/wn/${weather_state}@4x.png`}
      ></img>
      <div className="day-temps">
        <p>{Math.round(max_temp) + "°C"}</p>
        <p>{Math.round(min_temp) + "°C"}</p>
      </div>
    </div>
  );
}
