import { useState, useEffect, React } from "react";
import getLocation from "../services/getLocation";
import getWeatherData from "../services/getWeatherData";
import HighlightCard from "./HighlightCard";
import "./Highlights.css";

export default function Hightlights({ keyword }) {
  const [todayData, updateWeather] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getLocation(keyword).then((id) => {
      getWeatherData(id).then((weekData) => {
        updateWeather(weekData[0]);
        setLoading(false);
      });
    });
  }, [keyword]);

  if (loading) {
    return (
      <div className="daily-forecast">
        <div className="loader body-loader">Loading...</div>
      </div>
    );
  }

  return (
    <div className="highlights">
      <h2>Today's Highlights</h2>
      <div className="highlights-container">
        <HighlightCard type="wind" data={todayData.wind_speed} />
        <HighlightCard type="humidity" data={todayData.humidity} />
        <HighlightCard type="visibility" data={todayData.visibility} />
        <HighlightCard type="pressure" data={todayData.air_pressure} />
      </div>
    </div>
  );
}
