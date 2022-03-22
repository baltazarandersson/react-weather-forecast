import { API_KEY, API_URL } from "./settings";
import moment from "moment";

export default async function getLocationDailyData(coords) {
  const fetchResponse = await fetch(
    `${API_URL}/onecall?lat=${coords.lat}&lon=${coords.lon}&exclude=hourly,minutely,alerts&units=metric${API_KEY}`
  );
  const response = await fetchResponse.json();

  const eightDayData = response.daily;
  const fiveDayData = eightDayData.splice(0, 6);

  const mainData = fiveDayData.map((day) => {
    const { dt, dt: id } = day;
    const { max: max_temp, day: the_temp, min: min_temp } = day.temp;

    const { description: weather_state_name, icon: weather_state } =
      day.weather[0];

    const date = moment.unix(dt).format("ddd, DD MMM");

    return {
      date,
      max_temp,
      the_temp,
      min_temp,
      weather_state,
      weather_state_name,
      id,
    };
  });

  return mainData;
}
