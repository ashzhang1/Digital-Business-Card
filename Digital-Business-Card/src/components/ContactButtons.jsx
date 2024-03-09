import React from "react";
import linkedinButton from '../assets/Linkedin-Logo.png';
import emailButton from '../assets/email.png';

export default function ContactButtons() {
    return (
       <div className="contact-buttons-container">
            <div className="linkedin-button">
                <img src={linkedinButton} className="linkedin-logo" />
                <a href="https://www.linkedin.com/in/ashley-zhang1/" className="linkedin-link" target="_blank">LinkedIn</a>
            </div>
            <div className="email-button">
                <img src={emailButton} className="email-logo" />
                <a href="mailto:ashzhang1@gmail.com" className="email-link" target="_blank">Email</a>
            </div>
       </div>
    )
}