import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



const DateTimePicker = ({ selectedDateTime, setSelectedDateTime }) => {
    return ( <
        DatePicker selected = { selectedDateTime }
        onChange = {
            (date) => setSelectedDateTime(date)
        }
        showTimeSelect dateFormat = "Pp"
        timeFormat = "HH:mm"
        timeIntervals = { 15 }
        timeCaption = "Time"
        minDate = { new Date() }
        placeholderText = "Select Date and Time" /
        >
    );
};

export default DateTimePicker;