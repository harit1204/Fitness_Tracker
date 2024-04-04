// LoginPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  return (
    <div className="login-page">
      <h2>Login</h2>
      <form>
        {/* Input fields for email and password */}
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        {/* Login button */}
        <button type="submit">Login</button>
      </form>
      {/* Link to signup page */}
      <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
    </div>
  );
}

export default LoginPage;
