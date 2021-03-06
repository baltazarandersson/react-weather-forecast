import { React, useEffect, useState } from "react";
import { useLocation } from "wouter";
import getLocationCurrentWeather from "services/getLocationCurrentWeather";
import Error from "components/Error";
import { Spinner } from "components/Spinner";
import "./index.css";
import { useUnitConversor } from "hooks/useUnitConversor";

export default function Nav({ params }) {
  const [todayData, updateWeather] = useState([]);
  const [location, setLocation] = useLocation();
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const { temp: theTemp, unit } = useUnitConversor(todayData.the_temp);

  const { keyword } = params;

  useEffect(() => {
    setLoading(true);

    getLocationCurrentWeather(keyword)
      .then((data) => {
        updateWeather(data);
        setLoading(false);
      })
      .catch(console.log);
  }, [keyword]);

  if (loading) {
    return (
      <div className="nav">
        <Spinner spinnerClass={"nav-loader"} />
      </div>
    );
  }

  if (todayData.error === true) {
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
        <Error error={todayData}></Error>
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
        src={`https://openweathermap.org/img/wn/${todayData.weather_state}@4x.png`}
      ></img>
      <div className="actual-temp">
        <p>{theTemp}</p>
        <p>{unit}</p>
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
