import React from 'react';
import '../styles/App.css';
import { FaLungs, FaTooth, FaBone, FaHeart } from 'react-icons/fa';

const organIconMap = {
  Lungs: FaLungs,
  Teeth: FaTooth,
  Bone: FaBone,
  Heart: FaHeart,
};

function HealthStatusCards({ cards }) {
    return (
    <div className="health-status-cards">
        {cards.map((card) => {
            const IconComponent = organIconMap[card.organ];
            return (
            <div key={card.id} className="card">
                <div className="card-header">
                    {IconComponent && <IconComponent className="card-icon" />}
                    <h4 className="organ-name">{card.organ}</h4>
                </div>
                
                <p className="date">{card.date}</p>
                <div className="progress-bar-container">
                    <div
                        className="progress-bar-fill"
                        style={{
                            width: `${card.progress}%`, 
                            backgroundColor: card.statusColor 
                        }}
                    ></div>
                </div>
            </div>
            );
        })}
    </div>
    );
}

export default HealthStatusCards;