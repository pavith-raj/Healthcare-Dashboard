import React from 'react';
import '../styles/App.css';
import DashboardOverview from './DashboardOverview';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';
import CalendarView from './CalendarView';
import { calendarAppointmentsData, staticAppointmentDetails } from '../data/healthIndicators';

const DashboardMainContent = () => {
  return(
    <main className="dashboard-main-content">
      <div className="grid-container">
        
        <div className="overview-section">
          <DashboardOverview />
                  
        <div className="activity-feed-section">
          <ActivityFeed />
        </div>
        </div>


        <div className="calendar-section">
          <CalendarView
            appointments={calendarAppointmentsData}
            staticDetails={staticAppointmentDetails}
          />
          <div className="upcoming-schedule-section">
            <UpcomingSchedule />
          </div>
        </div>

      </div>
    </main>
  )
};

export default DashboardMainContent;
