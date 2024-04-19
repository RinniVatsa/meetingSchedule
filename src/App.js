import React, { useState } from 'react';
import DateTimePicker from './DateTimePicker';
import MeetingForm from './MeetingForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './images/logo.png'; // Import your logo image

function App() {
    const [selectedDateTime, setSelectedDateTime] = useState(null);
    const [meetingScheduled, setMeetingScheduled] = useState(null);

    const handleFormSubmit = (meetingDetails) => {
        const scheduledMeeting = {
            ...meetingDetails,
            dateTime: selectedDateTime,
        };
        setMeetingScheduled(scheduledMeeting);
    };

    return ( <
        div className = "App" >
        <
        div className = "header" >
        <
        img src = { logo }
        alt = "Logo"
        className = "logo" / >
        <
        div className = "description" >
        <
        h2 > Meeting Scheduler < /h2> <
        p > Schedule your meetings efficiently with our easy - to - use web app! < /p> < /
        div > <
        /div>  <div className="backgroundImage"><
        DateTimePicker selectedDateTime = { selectedDateTime }
        setSelectedDateTime = { setSelectedDateTime }
        /> <
        MeetingForm onSubmit = { handleFormSubmit }
        /> {
        meetingScheduled && ( <
            div className = 'box' >
            <
            h2 > Meeting Scheduled! < /h2> <strong> <
            p > Title: { meetingScheduled.title } < /p> </strong > < strong > <
            p > Description: { meetingScheduled.description } < /p> </strong > < strong > <
            p > Date & Time: { selectedDateTime.toLocaleString() } < /p></strong > < /
            div >
        )
    }

    <
    /div > < /
    div >
);
}

export default App;