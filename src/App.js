import React from 'react';
import './styles/App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardMainContent from './components/DashboardMainContent';

function App(){
  return (
    <div className="app-container">
      <Header />
      <div className="content-area">
          <div className="sidebar-wrapper">
          <Sidebar />
        </div>

        <div className="main-content-wrapper">
          <DashboardMainContent />
        </div>
      </div>
    </div>
  );
}
export default App;

