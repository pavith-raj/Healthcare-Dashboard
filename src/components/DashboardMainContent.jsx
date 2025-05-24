import React from 'react';
import '../styles/App.css';
import DashboardOverview from './DashboardOverview';

const DashboardMainContent = () => {
  return(
    <main className="dashboard-main-content">
      <div className="grid-container">
        <DashboardOverview />
      </div>
    </main>
  )
};

export default DashboardMainContent;
