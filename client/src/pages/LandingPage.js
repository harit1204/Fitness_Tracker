// LandingPage.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="container">
      <h1 className="title">Welcome to Fitness Tracker</h1>
      <p className="description">
        Start your fitness journey today! Track your workouts, monitor your progress, and achieve your fitness goals.
      </p>
      <div className="button-container">
        {/* Link to login page */}
        <Link to="/login" className="button">
          Login
        </Link>
        {/* Link to signup page */}
        <Link to="/signup" className="button">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
