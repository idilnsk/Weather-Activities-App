export default function Weather({ weather }) {

  return (
    <div>
      <h1>Weather</h1>

      {(weather != null) && weather.isGoodWeather ? (
        <h3>The weather is perfect today!!!!!</h3>
      ) : (
        <h3>The weather is so shitty!!!!!</h3>
      )}

      {weather && (
        <h2>
          {weather.condition} {weather.temperature}°C
        </h2>
      )}
    </div>
  );
}
