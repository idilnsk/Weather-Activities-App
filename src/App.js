import React, { useState, useEffect } from "react";
import List from "./components/list";
import Form from "./components/form";
import Weather from "./components/weather";
import "./components/weather.css";

const API_URL = "https://example-apis.vercel.app/api/weather/europe";

export default function App() {
  const [weather, setWeather] = useState(null);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    console.log("Fetching Weather!");
    fetchWeather();
    const fetchInterval = 3000;

    const interval = setInterval(fetchWeather, fetchInterval);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const fetchWeather = () => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching weather:", error));
  };

  const handleNewActivityCallback = (newActivity) => {
    setActivities([...activities, newActivity]);
  };

  const handleActivityDeleteCallback = (activities) => {
    setActivities(activities);
  };

  if (!weather) {
    return;
  }
  return (
    <div className="backgroundClass">
      <Weather weather={weather} />
      <List
        activities={activities}
        weather={weather}
        handleActivityDeleteCallback={handleActivityDeleteCallback}
      />
      <Form handleNewActivityCallback={handleNewActivityCallback} />
    </div>
  );
}
