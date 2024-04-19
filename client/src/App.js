// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import ProfileGenerationPage from './pages/ProfileGenerationPage'; // Import ProfileGenerationPage

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/profile-generation" element={<ProfileGenerationPage />} /> {/* Add route for ProfileGenerationPage */}
      </Routes>
    </Router>
  );
}

export default App;
