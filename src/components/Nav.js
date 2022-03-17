import { React, useEffect, useState } from "react";
import "./Nav.css";
import getLocation from "../services/getLocation";
import getWeatherData from "../services/getWeatherData";
import { useLocation } from "wouter";
import "./Loader.css";

export default function Nav({ params }) {
  const [todayData, updateWeather] = useState([]);
  const [location, setLocation] = useLocation();
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const { keyword } = params;

  useEffect(() => {
    setLoading(true);
    getLocation(keyword).then((id) => {
      getWeatherData(id).then((weekData) => {
        updateWeather(weekData[0]);
        setLoading(false);
      });
    });
  }, [keyword]);

  console.log(loading);

  if (loading) {
    return (
      <div className="nav">
        <div className="loader nav-loader">Loading...</div>
      </div>
    );
  }

  return (
    <div className="nav">
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          setLocation(`/location/${query}`);
        }}
      >
        <input
          type="text"
          placeholder="Search for places"
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      <img
        alt="weather icon"
        src={`https://www.metaweather.com/static/img/weather/${todayData.weather_state}.svg`}
      ></img>
      <div className="actual-temp">
        <p>{Math.round(todayData.the_temp * 10) / 10}</p>
        <p>°C</p>
      </div>
      <div className="weather-state">{todayData.weather_state_name}</div>
      <div className="weather-info">
        <div className="weather-date">
          <p>Today</p>
          <div></div>
          <p>{todayData.date}</p>
        </div>
        <div className="weather-day">
          <img
            alt="vector"
            src="https://www.svgrepo.com/show/127575/location-sign.svg"
          ></img>
          <p>{todayData.location_name}</p>
        </div>
      </div>
    </div>
  );
}
