import React from "react";
import '../styles/App.css';

const Sidebar = () =>{
    return (
        <div className="sidebar">
           <h2 style={{ color: '#0AB3FF' }}>Health<span style={{ color: '#2E3A59' }}>care.</span></h2>
                <nav>
                    <h4>General</h4>
                    <ul>
                        <li>Dashboard</li>
                        <li>History</li>
                        <li>Calender</li>
                        <li>Appoinments</li>
                        <li>statistics</li>
                    </ul>
                </nav>
        </div>
    );
};

export default Sidebar;