import React from 'react';
import '../styles/App.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function CalendarView({ appointments, staticDetails }) {
    const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
    const monthDays = Array.from({ length: 31 }, (_, i) => i + 1);
    
    const getAppointmentTimesForDay = (day) => {
        const dayAppointments = appointments.find(
            (app) => app.day === day && app.month === 'October' && app.year === 2021
        );
        return dayAppointments ? dayAppointments.times : [];
    };
    
    return (
    <div className="calendar-view">
        <div className="calendar-header">
            <h4 className="month-title">October 2021</h4>
            <div className="nav-buttons">
                <FaChevronLeft className="nav-icon" />
                <FaChevronRight className="nav-icon" />
            </div>
        </div>
        
        <div className="days-of-week">
            {days.map((day) => (
                <span key={day}>{day}</span>
            ))}
        </div>
        
        <div className="calendar-grid">
            {Array.from({ length: 4 }).map((_, i) => <div key={`empty-${i}`} className="empty-cell"></div>)}
            {monthDays.map((day) => {
                const times = getAppointmentTimesForDay(day);
                const isTodayOrSelected = day === 26;
                const hasAppointments = times.length > 0;
                
                return (
                <div
                key={day}
                className={`day-cell ${isTodayOrSelected ? 'selected-day' : ''}`}
                >
                    <span className="day-number">{day}</span>
                    {hasAppointments && (
                        <div className="appointment-times">
                            {times.map((time, index) => (
                                <span key={index} className="appointment-time">
                                    {time}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            );  
        })}
    </div>
    
    <div className="appointment-details">
        {staticDetails.map((detail) => (
            <div key={detail.id} className="detail-card">
                <div className="detail-content">
                    <h5 className="detail-type">{detail.type}</h5>
                    <span className="detail-time">{detail.time}</span>
                    <p className="detail-name">{detail.name}</p>
                </div>
            </div>
        ))}
    </div>
    </div>
);
}

export default CalendarView;