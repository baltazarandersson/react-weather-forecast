import React from "react";
import "./Day.css";

export default function Day({ date, max_temp, min_temp, weather_state }) {
  return (
    <div className="day-card">
      {date}
      <img
        alt="weather icon"
        src={`https://www.metaweather.com/static/img/weather/${weather_state}.svg`}
      ></img>
      <div className="day-temps">
        <p>{Math.round(max_temp) + "°C"}</p>
        <p>{Math.round(min_temp) + "°C"}</p>
      </div>
    </div>
  );
}
