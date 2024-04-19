import React, { useState, useEffect } from 'react';
import './DashboardPage.css';

const DashboardPage = () => {
  // State to store blood pressure data
  const [systolic, setSystolic] = useState(120);
  const [diastolic, setDiastolic] = useState(80);

  // Function to generate random blood pressure data
  const generateBloodPressureData = () => {
    const newSystolic = Math.floor(Math.random() * (180 - 90 + 1)) + 90;
    const newDiastolic = Math.floor(Math.random() * (120 - 60 + 1)) + 60;
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

  // Render gauge chart
  return (
    <div className="dashboard-container">
      <h2>Blood Pressure Dashboard</h2>
      <div className="gauge-container">
        <div className="gauge">
          <div className="semi-circle">
            <div className="arrow" style={{ transform: `rotate(${(systolic / 180) * 180 - 90}deg)` }}></div>
            <svg className="color-arc" viewBox="0 0 100 100">
              <path
                className="color-arc__track"
                d="M50,50 L70,70 A50,50 0 0 1 20,70 L10,50 A50,50 0 0 1 70,20 Z"
              />
              <path
                className="color-arc__progress"
                d="M50,50 L70,70 A50,50 0 0 1 20,70"
                stroke="#FF0000"
                stroke-width="10"
                stroke-linecap="round"
                style={{
                  transform: `stroke-dasharray ${systolic * 1.8} 280`,
                }}
              />
            </svg>
          </div>
          <div className="gauge-reading">{systolic}</div>
        </div>
        <div className="gauge">
          <div className="semi-circle">
            <div className="arrow" style={{ transform: `rotate(${(diastolic / 120) * 180 - 90}deg)` }}></div>
            <svg className="color-arc" viewBox="0 0 100 100">
              <path
                className="color-arc__track"
                d="M50,50 L70,70 A50,50 0 0 1 20,70 L10,50 A50,50 0 0 1 70,20 Z"
              />
              <path
                className="color-arc__progress"
                d="M50,50 L70,70 A50,50 0 0 1 20,70"
                stroke="#00FF00"
                stroke-width="10"
                stroke-linecap="round"
                style={{
                  transform: `stroke-dasharray ${diastolic * 1.5} 280`,
                }}
              />
            </svg>
          </div>
          <div className="gauge-reading">{diastolic}</div>
        </div>
      </div>
      <div className="current-values">
        <p>Current Systolic: {systolic}</p>
        <p>Current Diastolic: {diastolic}</p>
      </div>
    </div>
  );
};

export default DashboardPage;
