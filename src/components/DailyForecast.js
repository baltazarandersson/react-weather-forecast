import { React, useEffect, useState } from "react";
import Day from "./Day";
import getLocation from "../services/getLocation";
import getWeatherData from "../services/getWeatherData";
import "./DailyForecast.css";
import moment from "moment";

export default function DailyForecast({ keyword }) {
  const [weatherData, updateWeather] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getLocation(keyword).then((id) => {
      getWeatherData(id).then((data) => {
        updateWeather(data);
        setLoading(false);
      });
    });
  }, [keyword]);

  function dateParser(date) {
    const newDate =
      moment().add(1, "days").format("ddd, DD MMM") === date
        ? "Tomorrow"
        : date;
    return newDate;
  }

  if (loading) {
    return (
      <div className="daily-forecast">
        <div className="loader body-loader">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <div className="daily-forecast">
        {weatherData.slice(1, 6).map((day) => {
          return (
            <Day
              date={dateParser(day.date)}
              max_temp={day.max_temp}
              min_temp={day.min_temp}
              weather_state={day.weather_state}
              key={day.id}
            ></Day>
          );
        })}
      </div>
    </>
  );
}
