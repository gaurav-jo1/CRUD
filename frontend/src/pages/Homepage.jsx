/* eslint-disable no-useless-concat */
import React from "react";
import { Link } from "react-router-dom";
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
                <li><Link to={'/profile/' + 'Task1'}>Task 1 </Link></li>
                <li><Link to={'/profile/' + 'Task2'}>Task 2 </Link></li>
                <li><Link to={'/profile/' + 'Task3'}>Task 3 </Link></li>
                <li><Link to={'/profile/' + 'Task4'}>Task 4 </Link></li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
