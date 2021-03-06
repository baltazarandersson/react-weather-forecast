import { useState, useEffect, React } from "react";
import HighlightCard from "components/HighlightCard";
import getLocationCurrentWeather from "services/getLocationCurrentWeather";
import { Spinner } from "components/Spinner";
import "./index.css";

export default function Hightlights({ keyword }) {
  const [todayData, updateWeather] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getLocationCurrentWeather(keyword).then((data) => {
      updateWeather(data);
      setLoading(false);
    });
  }, [keyword]);

  if (loading) {
    return <Spinner spinnerClass={"body-loader"} />;
  }

  if (todayData.error === true) {
    return <div className="highlights"></div>;
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
