import React from "react";
import '../styles/App.css';
import { FaTachometerAlt, FaHistory, FaCalendarAlt, FaBriefcaseMedical, FaChartBar, FaComments, FaLifeRing, FaCog,} from 'react-icons/fa';
import { navigationLinks } from "../data/navigationLinks";

const iconMap = {
    FaTachometerAlt: FaTachometerAlt,
    FaHistory : FaHistory,
    FaCalendarAlt: FaCalendarAlt,
    FaBriefcaseMedical: FaBriefcaseMedical,
    FaChartBar: FaChartBar,
    FaComments: FaComments,
    FaLifeRing: FaLifeRing,
    FaCog: FaCog,
};

const Sidebar = () => {
    return (
    <div className="sidebar">
        <nav>
            {navigationLinks.map(section => (
                <div key={section.id}>
                    <h4 className="heading">{section.title}</h4>
                    <ul className="nav-list">
                        {section.links.map(link => {
                            const IconComponent = iconMap[link.icon];
                            return (
                            <li key={link.name} className="nav-item">
                                <a href="#" className={`nav-link ${link.active ? 'active' : ''}`}>
                                    {IconComponent && <IconComponent className="nav-icon" />}
                                    {link.name}
                                </a>
                            </li>
                            );
                        })}
                    </ul>
                </div>
            ))}
        </nav>
    </div>
    );
};

export default Sidebar;