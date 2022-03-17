import moment from "moment";

const api_url = "https://www.metaweather.com/api/location/";

export default async function getWeatherData(id) {
  const fetchResponse = await fetch(`${api_url + id}`);
  const response = await fetchResponse.json();
  const data = response.consolidated_weather;

  const weekData = data.map((data) => {
    const {
      applicable_date,
      max_temp,
      the_temp,
      min_temp,
      humidity,
      visibility,
      air_pressure,
      wind_speed,
      weather_state_abbr: weather_state,
      weather_state_name,
      id,
    } = data;

    const location_name = response.title;
    const date = moment(applicable_date).format("ddd, DD MMM");

    return {
      date,
      max_temp,
      the_temp,
      min_temp,
      weather_state,
      weather_state_name,
      humidity,
      visibility,
      air_pressure,
      wind_speed,
      location_name,
      id,
    };
  });

  return weekData;
}
