export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      name: formData.get("nameActivity"),
      isforGoodWeather: event.target.elements.checkbox.checked,
      //isForGoodWeather: formData.get("checkbox") === "on",
    };
    //const data = Object.fromEntries(formData);
    event.target.reset();
    event.target.elements.nameActivity.focus();
    console.log(data);
  }
  return (
    <>
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
    </>
  );
}
