import React from "react";

import "../styling/Homepage.scss";


const Homepage = () => {
  return (
    <div className="Homepage-container">
      <div className="Homepage_form-container">
        <div className="Homepage_user-container">
          <h1>Hello, Gaurav</h1>
        </div>
        <div className="Homepage_task-create">
          <form>
            <input type="text" />
            <input type="submit" />
          </form>
        </div>
        <div className="Homepage_tasks-list">
            <ul>
                <li>Task 1</li>
                <li>Task 2</li>
                <li>Task 3</li>
                <li>Task 4</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
