import React from 'react';
import {
    angelListIcon,
    linkedinIcon,
    resumeIcon,
    githubIcon,
    stackOverflowIcon
} from '../constants/faIcons';

export default function Social() {
    return (
        <div>
            <ul id="social-links">
                <li>
                    <a
                        href="https://angel.co/jennamichaels" 
                        target="_blank"
                        rel="noopener noreferrer"
                        id="angel-link"
                        data-tooltip="AngelList"
                        data-tooltip-location="bottom">
                            { angelListIcon }
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/jenna-michaels/"
                        target="_blank"
                        rel="noopener noreferrer"
                        id="linkedin-link"
                        data-tooltip="LinkedIn"
                        data-tooltip-location="bottom">
                            { linkedinIcon }
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.canva.com/design/DADsDSMzEHc/iVNMgHehzb4ziKE0TOPzOA/view?website#4" 
                        target="_blank"
                        rel="noopener noreferrer"
                        id="resume-link"
                        data-tooltip="Resume"
                        data-tooltip-location="bottom">
                            { resumeIcon }
                    </a>
                </li>
                <li>
                    <a 
                        href="https://github.com/jenna-m" 
                        target="_blank"
                        rel="noopener noreferrer"
                        id="github-link"
                        data-tooltip="GitHub"
                        data-tooltip-location="bottom">
                            { githubIcon }
                    </a>
                </li>
                <li>
                    <a 
                        href="https://stackoverflow.com/story/jennamichaels" 
                        target="_blank"
                        rel="noopener noreferrer"
                        id="stackoverflow-link"
                        data-tooltip="SO"
                        data-tooltip-location="bottom">
                            { stackOverflowIcon }
                    </a>
                </li>
            </ul>
        </div>
    )
}