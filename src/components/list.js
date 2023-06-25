import React from "react";

export default function List({ activities, weather }) {
  return (
    <div>
      <h2>Activity List</h2>
      {activities.length > 0 ? (
        <ul>
          {activities.map((activity, index) => (
            <li key={index}>{activity.name}</li>
          ))}
        </ul>
      ) : (
        <p>No activities found</p>
      )}
    </div>
  );
}
