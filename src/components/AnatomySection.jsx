import React from "react";
import '../styles/App.css';
import humanBody from '../assets/human-body.png';
import scannerImage from '../assets/scannerImage.png';

function AnatomySection({ indicators }) {
    return (
    <div className="anatomy-section">
        <div className="image-container">
            <img src={humanBody} alt="Human Anatomy" className="human-body-image" />
            {indicators.map((indicator) => (
                <div
                    key={indicator.id}
                    className={`indicator-point ${indicator.status === 'healthy' ? 'healthy' : 'issue'}`}
                    style={{ top: indicator.position.top, left: indicator.position.left }}
                >
                
                    <img src={scannerImage} alt="Scanner" className="scanner-icon"/>
                    <div className="indicator-text-bubble">
                        <span className="indicator-text">{indicator.name}</span>
                    </div>
            </div>
            ))}
        </div>
    </div>
    );
}

export default AnatomySection;