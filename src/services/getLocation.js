const api_url = "https://www.metaweather.com/api/location/search/?query=";

export default async function getLocation(keyword) {
  const fetchResponse = await fetch(`${api_url + keyword}`);
  const response = await fetchResponse.json();
  return response[0].woeid;
}
