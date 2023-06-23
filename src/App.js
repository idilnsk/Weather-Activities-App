import logo from "./logo.svg";
import "./App.css";
import Weather from "./components/weather.js";
import Activities from "./components/activities.js";
import Form from "./components/form";
import Delete from "./components/delete";
import filterActivities from "./components/filterActivities";

function App() {
  return (
    <>
      <Weather />
      <Activities />
      <Form />
    </>
  );
}

export default App;
