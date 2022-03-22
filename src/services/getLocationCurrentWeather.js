import { API_KEY, API_URL } from "./settings";
import moment from "moment-timezone";

export default async function getLocationCurrentWeather(keyword) {
  const fetchResponse = await fetch(
    `${API_URL}/weather?q=${keyword}&units=metric${API_KEY}`
  );
  const response = await fetchResponse.json();

  const { dt, dt: id, name: location_name } = response;

  let { visibility } = response;
  visibility = visibility / 1000;

  const { pressure: air_pressure, humidity, temp: the_temp } = response.main;

  let { speed: wind_speed } = response.wind;
  wind_speed = +wind_speed * (3600 / 1000);

  const date = moment.unix(dt).format("ddd, DD MMM");

  let { description: weather_state_name, icon: weather_state } =
    response.weather[0];
  weather_state_name =
    weather_state_name.charAt(0).toUpperCase() + weather_state_name.slice(1);

  const coords = response.coord;

  return {
    visibility,
    coords,
    date,
    id,
    air_pressure,
    humidity,
    the_temp,
    wind_speed,
    weather_state,
    weather_state_name,
    location_name,
  };
}
