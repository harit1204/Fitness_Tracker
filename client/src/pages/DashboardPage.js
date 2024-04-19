import React, { useState, useEffect } from 'react';
import './DashboardPage.css';
import BarChart from './barChart'; // Assuming BarChart component is in BarChart.js
import LineChart from './lineChart';

const DashboardPage = () => {
  // State to store blood pressure data
  const [systolic, setSystolic] = useState(120);
  const [diastolic, setDiastolic] = useState(80);

  // Function to generate random blood pressure data
  const generateBloodPressureData = () => {
    const newSystolic = Math.floor(Math.random() * (40)) + 90;
    const newDiastolic = Math.floor(Math.random() * (40)) + 70;
    setSystolic(newSystolic);
    setDiastolic(newDiastolic);
  };

  // Function to update blood pressure data every second
  useEffect(() => {
    const interval = setInterval(() => {
      generateBloodPressureData();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Render gauge chart and bar chart
  return (
    <div className="dashboard-container">
      <h2>Blood Pressure Dashboard</h2>
      <div className="gauge-container">
        <div className="gauge">
          <div className="semi-circle">
            <div className="arrow" style={{ transform: `rotate(${(systolic / 180) * 180 - 90}deg)` }}></div>
            <div className="gauge-value">{systolic}</div>
          </div>
          <div className="gauge-label">Systolic</div>
        </div>
        <div className="gauge">
          <div className="semi-circle">
            <div className="arrow" style={{ transform: `rotate(${(diastolic / 120) * 180 - 90}deg)` }}></div>
            <div className="gauge-value">{diastolic}</div>
          </div>
          <div className="gauge-label">Diastolic</div>
        </div>
      </div>
      <div className="current-values">
        <p>Current Systolic: {systolic}</p>
        <p>Current Diastolic: {diastolic}</p>
      </div>
      <h2>Calorie Intake Chart</h2>
      
      <h2>Calorie Intake Chart</h2>
      <BarChart />
      <h2>Steps Count Chart</h2>
      <LineChart />
    </div>
  );
};

export default DashboardPage;
