import React from 'react';
import '../styles/App.css'; // Import global styles

function ActivityFeed() {
  const barHeights = [
    { day: 'Mon', height: '40%' },
    { day: 'Tues', height: '60%' },
    { day: 'Wed', height: '30%' },
    { day: 'Thurs', height: '80%' },
    { day: 'Fri', height: '50%' },
    { day: 'Sat', height: '70%' },
    { day: 'Sun', height: '45%' },
  ];

  return (
    <div className="activity-feed">
      {/* Revert to just the title */}
      <h3 className="title">Activity</h3>
      {/* The summary remains as it was in your previous code */}
      <p className="summary">3 appointments on this week</p>

      <div className="chart-container">
        {barHeights.map((bar, index) => (
          <div key={index} className="bar-wrapper">
            <div
              className="bar"
              style={{
                height: bar.height,
                backgroundColor: bar.day === 'Fri' ? 'var(--color-healthy)' : 'var(--color-primary-blue)'
              }}
            ></div>
            <span className="bar-day">{bar.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityFeed;