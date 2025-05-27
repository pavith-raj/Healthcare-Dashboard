import React from "react";
import '../styles/App.css';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import { anatomicalIndicators, healthStatusCardsData } from '../data/healthIndicators';


function DashboardOverview() {
    return(
        <div className="dashboard-overview">
            <h2 className="section-title">Dashboard</h2>
            <span className="this-week">This Week</span>

      <div className="overview-content">
        <AnatomySection indicators={anatomicalIndicators} />
        <div className="right-column">
          <HealthStatusCards cards={healthStatusCardsData} />
        </div>
      </div>
    </div>
  );
}

export default DashboardOverview;
