import React, { useState } from 'react'
import './App.css'
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap'

function MeetingForm({ onSubmit }) {
    const [meetingDetails, setMeetingDetails] = useState({
        title: '',
        description: '',
        guests: [],

        categories: [],
    })
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)

    // Define event handlers for form inputs
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setMeetingDetails({...meetingDetails, [name]: value })
    }

    const handleGuestAdd = () => {
        const newGuests = [...meetingDetails.guests, '']
        setMeetingDetails({...meetingDetails, guests: newGuests })
    }

    const handleGuestChange = (e, index) => {
        const newGuests = [...meetingDetails.guests]
        newGuests[index] = e.target.value
        setMeetingDetails({...meetingDetails, guests: newGuests })
    }

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target
        let updatedCategories = [...meetingDetails.categories]
        if (checked) {
            updatedCategories.push(value)
        } else {
            updatedCategories = updatedCategories.filter(
                (category) => category !== value,
            )
        }
        setMeetingDetails({...meetingDetails, categories: updatedCategories })
    }

    // Define form submission handler
    const handleSubmit = (e) => {
        e.preventDefault()
        setShowSuccessMessage(true)
        onSubmit(meetingDetails)
    }

    return ( <
        form onSubmit = { handleSubmit } > { ' ' } { /* Render form inputs */ } { ' ' } <
        input type = "text"
        name = "title"
        placeholder = "Meeting Title"
        value = { meetingDetails.title }
        onChange = { handleInputChange }
        required /
        >
        <
        textarea name = "description"
        placeholder = "Meeting Description"
        value = { meetingDetails.description }
        onChange = { handleInputChange }
        required /
        >
        <
        div >
        <
        button type = "button"
        onClick = { handleGuestAdd } >
        Add Guest { ' ' } <
        /button>{' '} {
            meetingDetails.guests.map((guest, index) => ( <
                input key = { index }
                type = "text"
                placeholder = { `Guest ${index + 1}` }
                value = { guest }
                onChange = {
                    (e) => handleGuestChange(e, index) }
                required /
                >
            ))
        } { ' ' } <
        /div>{' '} <
        div className = "App" >
        <
        p > Select Meeting Categories: < /p>{' '} <
        label >
        <
        input type = "checkbox"
        value = "Attendees"
        onChange = { handleCheckboxChange }
        />
        Attendees(Number of People) { ' ' } <
        /label>{' '} <
        label >
        <
        input type = "checkbox"
        value = "SpecificTopic"
        onChange = { handleCheckboxChange }
        />
        Specific Topic(Details) { ' ' } <
        /label>{' '} <
        /div>{' '} <
        p > Please, share anything that will help prepare
        for our meeting < /p>{' '} <
        textarea name = "description"
        required / >
        <
        p > Please, Share with us the name of your work space(
            if any) < /p>{' '} <
        textarea name = "description"
        required / > { /* Render submit button */ } { ' ' } <
        button type = "submit" > Schedule Event < /button>{' '} {
            showSuccessMessage && ( <
                p className = "success-message" > Meeting scheduled successfully! < /p>
            )
        } { ' ' } <
        /form>
    )
}

export default MeetingForm