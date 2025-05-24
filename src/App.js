import React from 'react';
import './styles/App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardMain from './components/DashboardMainContent';

function App(){
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <DashboardMain />

      </div>
    </div>
  );
}
export default App;

