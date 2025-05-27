import React from "react";
import '../styles/App.css';
import { upcomingAppointmentsData } from "../data/appointments";
import SimpleAppointmentCard from './SimpleAppointmentCard';

function UpcomingSchedule(){
    return(
        <div className="upcoming-schedule">
            <h3 className="title">The Upcoming Schedule</h3>
            {upcomingAppointmentsData.map((dayData) =>(
                <div key={dayData.id} className="day-section">
                    <h4 className="day-heading">{dayData.day}</h4>
                    
                    <div  className="appointment-list">
                        {dayData.appointments.map((appointment, index) => (
                            <SimpleAppointmentCard
                            key={index}
                            type={appointment.type}
                            time={appointment.time}
                            icon={appointment.icon}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default UpcomingSchedule;