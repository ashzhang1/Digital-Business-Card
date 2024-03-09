import React from "react";
import githubImage from '../assets/github-logo.png';

export default function Footer() {
    return (
       <div className="footer-container">
            <div className="github-button">
                <div className="github-logo-container">
                    <a href="https://github.com/ashzhang1" className="github-link" target="_blank">
                        <img src={githubImage} className="github-logo" />
                    </a>
                </div>
            </div>
       </div>
    )
}