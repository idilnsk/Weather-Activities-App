import React from "react";

export default function List({ weather, activities, handleActivityDeleteCallback }) {

  let activitiesForCurrentWeather = activities.filter((element) => {
    return element.isGoodWeather === weather.isGoodWeather;
  });

  const handleDelete = (name) => {
    const updatedActivities = activities.filter((item) => item.name !== name)
    handleActivityDeleteCallback(updatedActivities);
  };

  return (
    <div>
      <h2>Activity List</h2>
      {activitiesForCurrentWeather.length > 0 ? (
        <ul>
          {activitiesForCurrentWeather.map((activity, index) => (
            <li key={index}>{activity.name} <button onClick={() => handleDelete(activity.name)}>X</button></li>
          ))}
        </ul>
      ) : (
        <p>No activities found</p>
      )}
    </div>
  );
}
