import React from 'react';

const BarChart = () => {
  const calorieData = [2500, 2600, 2700, 2800, 2900, 1000, 1100]; // Static calorie intake data for each day
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="bar-chart-container">
      {calorieData.map((caloriesIntake, index) => (
        <div key={index} className="bar-wrapper">
          <div className="bar" style={{ height: `${caloriesIntake / 20}px` }}>
            {caloriesIntake}
          </div>
          <div className="day">{daysOfWeek[index]}</div>
        </div>
      ))}
    </div>
  );
};

export default BarChart;
