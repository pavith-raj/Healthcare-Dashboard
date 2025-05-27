import React from "react";
import '../styles/App.css';
import { FaCheckCircle, FaEye, FaHeartbeat, FaBrain } from 'react-icons/fa';

const iconMap = {
  checkup: FaCheckCircle,
  eye: FaEye,
  heart: FaHeartbeat,
  brain: FaBrain,
};

function SimpleAppointmentCard({ type, time, icon }) {
    const IconComponent = iconMap[icon];
    return(
        <div className="simple-appointment-card">
            <div className="icon-container">
                {IconComponent && <IconComponent className="card-icon" />}
            </div>
            
            <div className="content">
                <h5 className="type">{type}</h5>
                <span className="time">{time}</span>
            </div>
        </div>
  );
}

export default SimpleAppointmentCard;