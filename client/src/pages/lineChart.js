import React from 'react';

const LineChart = () => {
  // Dummy data for demonstration
  const stepsData = [2000, 3000, 3500, 4000, 3800, 4200, 5000]; // Dummy steps count data
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  // Calculate the maximum value for scaling the chart
  const maxSteps = Math.max(...stepsData);

  return (
    <div className="line-chart-container">
      <svg viewBox="0 0 400 200" className="chart-svg">
        {/* Vertical lines */}
        {stepsData.map((_, index) => (
          <line
            key={index}
            x1={index * 50 + 50}
            y1="20"
            x2={index * 50 + 50}
            y2="180"
            stroke="#ccc"
          />
        ))}
        {/* Horizontal lines and labels */}
        {[...Array(5)].map((_, index) => (
          <g key={index}>
            <line x1="50" y1={40 * (index + 1)} x2="350" y2={40 * (index + 1)} stroke="#ccc" />
            <text x="30" y={40 * (index + 1) + 5} textAnchor="end">
              {((5 - index) * maxSteps) / 5}
            </text>
          </g>
        ))}
        {/* Data points and connecting lines */}
        {stepsData.map((steps, index) => (
          <React.Fragment key={index}>
            <circle cx={index * 50 + 50} cy={200 - (steps * 160) / maxSteps} r="3" fill="#007bff" />
            {index > 0 && (
              <line
                x1={(index - 1) * 50 + 50}
                y1={200 - (stepsData[index - 1] * 160) / maxSteps}
                x2={index * 50 + 50}
                y2={200 - (steps * 160) / maxSteps}
                stroke="#007bff"
              />
            )}
            <text x={index * 50 + 50} y="195" textAnchor="middle">
              {daysOfWeek[index]}
            </text>
          </React.Fragment>
        ))}
      </svg>
    </div>
  );
};

export default LineChart;
