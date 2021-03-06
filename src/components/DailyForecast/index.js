import { React, useEffect, useState } from "react";
import moment from "moment";
import Day from "components/Day";
import { Spinner } from "components/Spinner";
import getLocationDailyData from "services/getLocationDailyData";
import getLocationCurrentWeather from "services/getLocationCurrentWeather";
import "./index.css";

export default function DailyForecast({ keyword }) {
  const [weatherData, updateWeather] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getLocationCurrentWeather(keyword).then((locationData) => {
      if (locationData.error === true) {
        updateWeather(locationData);
        setLoading(false);
      } else {
        getLocationDailyData(locationData.coords).then((data) => {
          updateWeather(data);
          setLoading(false);
        });
      }
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
    return <Spinner spinnerClass={"body-loader"} />;
  }

  if (weatherData.error === true) {
    return <div className="daily-forecast"></div>;
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
