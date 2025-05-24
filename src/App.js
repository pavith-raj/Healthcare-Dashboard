import React from 'react';
import './styles/App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardMainConten from './components/DashboardMainContent';

function App(){
  return (
    <div className="app-container">
      <Header />
      <div className="content-area">
        <Sidebar />
        <DashboardMainConten />
      </div>
    </div>
  );
}
export default App;

