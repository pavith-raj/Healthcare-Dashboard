import React from "react";
import '../styles/App.css';
import {FaSearch, FaBell, FaPlus } from 'react-icons/fa';
import avatar from '../assets/avatar.jpg';

const Header = () => {
  return (
    <header className="header">
        <div className="logo">
            <span style={{ color: '#0AB3FF' }}>Health</span>
            <span style={{ color: '#2E3A59' }}>care.</span>
        </div>

        <div className="search-bar">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search" className="search-input" />
        </div>

        <div className="right-section">
            <button className="add-button">
                <FaPlus />
            </button>

            <FaBell className="notification-icon" />
            <div className="user-profile">
                <img src={avatar} alt="User Avatar" className="avatar" />
                <span className="user-name">Dr. Sarah</span>
            </div>
        </div>
    </header>
  );
};

export default Header;
