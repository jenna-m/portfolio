import React from 'react';
import {
    githubIcon,
    angelListIcon,
    resumeIcon,
    linkedinIcon,
} from '../constants/faIcons';

export default function Social() {
    return (
        <div>
            <ul id="social-links">
                <li>
                    <a 
                        href="https://github.com/jenna-m" 
                        target="_blank"
                        rel="noopener noreferrer"
                        id="github-link">
                            { githubIcon }
                    </a>
                </li>
                <li>
                    <a
                        href="https://angel.co/jennamichaels" 
                        target="_blank"
                        rel="noopener noreferrer"
                        id="resume-link">
                            { angelListIcon }
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.canva.com/design/DADsDSMzEHc/iVNMgHehzb4ziKE0TOPzOA/view?website#4" 
                        target="_blank"
                        rel="noopener noreferrer"
                        id="resume-link">
                            { resumeIcon }
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/jenna-michaels/"
                        target="_blank"
                        rel="noopener noreferrer"
                        id="linkedin-link">
                            { linkedinIcon }
                    </a>
                </li>
            </ul>
        </div>
    )
}