// ProfileGenerationPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './ProfileGenerationPage.css';

const ProfileGenerationPage = () => {
  return (
    <div className="profile-generation-container">
      <h2>Generate Profile</h2>
      <form>
        {/* Input fields for profile generation */}
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="number" placeholder="Weight (kg)" />
        <input type="number" placeholder="Height (feet)" />
        <div className="radio-box">
          <input type="radio" id="veg" name="diet" value="veg" />
          <label htmlFor="veg">Veg</label>
          <input type="radio" id="nonveg" name="diet" value="nonveg" />
          <label htmlFor="nonveg">Non-Veg</label>
        </div>

        <input type="text" placeholder="Address" />
        <input type="text" placeholder="Ethnicity" />
        <input type="text" placeholder="Residence" />
        <input type="text" placeholder="Country" />
        <input type="text" placeholder="State" />
        <input type="text" placeholder="City" />
        <input type="text" placeholder="Family Doctor" />
        <input type="text" placeholder="Emergency Contact Person Name" />
        <input type="text" placeholder="Emergency Contact (Mobile Number)" />
        {/* Profile generation button */}
        <button type="submit">Generate Profile</button>
      </form>
      {/* Link to dashboard page */}
      <p>Go back to <Link to="/dashboard">Dashboard</Link></p>
    </div>
  );
};

export default ProfileGenerationPage;
