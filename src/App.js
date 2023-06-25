import React, { useState, useEffect } from "react";
import List from "./components/list";
import Form from "./components/form";

const API_KEY = "b3855c075626c02ef9786d441e970514";
const API_URL =
  "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API_KEY}";

export default function App() {
  const [activities, setActivities] = useState([]);
  const [weather, setWeather] = useState(null);

  const addActivity = (activity) => {
    const updatedActivities = [...activities, activity];
    setActivities(updatedActivities);
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = () => {
    const latitude = 51.5074; // Example latitude for Berlin
    const longitude = -0.1278; // Example longitude for Berlin

    const url = API_URL.replace("{lat}", latitude)
      .replace("{lon}", longitude)
      .replace("{API_KEY}", API_KEY);

    fetch(url)
      .then((response) => response.json())
      .then((data) => setWeather(data))
      .catch((error) => console.error("Error fetching weather:", error));
  };

  return (
    <div>
      <h1>Weather</h1>
      {weather && weather.weather && weather.weather.length > 0 && (
        <h2>
          {weather.weather[0].description} {weather.main.temp}°C
        </h2>
      )}
      ----
      <List activities={activities} weather={weather} />
      <Form onAddActivity={addActivity} />
    </div>
  );
}
