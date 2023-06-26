import "./weather.css";

export default function Weather({ weather }) {
  return (
    <>
      <h1>Weather</h1>
      {weather && (
        <h2>
          {weather.condition} {weather.temperature}°C
        </h2>
      )}
      {weather && weather.isGoodWeather ? (
        <h3>The weather is awesome! Go outside and:</h3>
      ) : (
        <h3>Bad weather outside! Here's what you can do now:</h3>
      )}
      <aside
        className={` ${weather.isGoodWeather ? "good-weather" : "bad-weather"}`}
      ></aside>
    </>
  );
}
