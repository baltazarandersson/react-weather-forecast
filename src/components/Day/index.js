import { useUnitConversor } from "hooks/useUnitConversor";
import React from "react";
import "./index.css";

export default function Day({ date, max_temp, min_temp, weather_state }) {
  const { temp: dayMaxTemp, unit: dayMaxTempUnit } = useUnitConversor(max_temp);
  const { temp: dayMinTemp, unit: dayMinTempUnit } = useUnitConversor(min_temp);

  return (
    <div className="day-card">
      {date}
      <img
        alt="weather icon"
        src={`https://openweathermap.org/img/wn/${weather_state}@4x.png`}
      ></img>
      <div className="day-temps">
        <p>{Math.round(dayMaxTemp) + dayMaxTempUnit}</p>
        <p>{Math.round(dayMinTemp) + dayMinTempUnit}</p>
      </div>
    </div>
  );
}
