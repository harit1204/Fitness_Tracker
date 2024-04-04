// SignupPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './SignupPage.css';

function SignupPage() {
  return (
    <div className="signup-page">
      <h2>Sign Up</h2>
      <form>
        {/* Input fields for email, password, etc. */}
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        {/* Signup button */}
        <button type="submit">Sign Up</button>
      </form>
      {/* Link to login page */}
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}

export default SignupPage;
