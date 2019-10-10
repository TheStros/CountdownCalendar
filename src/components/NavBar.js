import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <nav className="navbar is-warning navigation">
      <h1 className="navbar-item">AM's CountdownCalendar App:</h1>
      <p className="navbar-item is-dark">
        <Link to="/" className="link is-dark">
          Home
        </Link>
      </p>
      <p className="navbar-item is-dark">
        <Link to="/calendar" className="link is-dark">
          Calendar
        </Link>
      </p>

      <p className="navbar-item is-dark">
        <Link to="/countdown" className="link is-dark">
          Countdown
        </Link>
      </p>
      <p className="navbar-item is-dark">
        <Link to="/resources" className="link is-dark">
          Resources
        </Link>
      </p>
    </nav>
  );
};
