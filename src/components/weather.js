export default function Weather({ weather }) {
  function handleSubmit(event) {
    console.log("weather: handle submit");
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      name: formData.get("nameActivity"),
      isGoodWeather: formData.get("checkbox") === "on",
    };
    //const data = Object.fromEntries(formData);
    event.target.reset();
    event.target.elements.nameActivity.focus();
    console.log(data);
  }

  return (
    <div>
      <h1>Weather</h1>

      {weather && weather.isGoodWeather ? (
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
