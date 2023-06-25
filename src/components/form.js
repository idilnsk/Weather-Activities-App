export default function Form({ handleNewActivityCallback }) {

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      name: formData.get("nameActivity"),
      isGoodWeather: formData.get("checkbox") === "on",
    };
    event.target.reset();
    event.target.elements.nameActivity.focus();
    console.log(data);
    handleNewActivityCallback(data);
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Add a new activity:</h2>
        <label htmlFor="nameActivity"></label>
        <input type="text" name="nameActivity" id="nameActivity" />
        <label htmlFor="checkbox">Good weather activity?</label>
        <input type="checkbox" name="checkbox" id="checkbox" />
        <button type="submit" name="submit" id="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
}
