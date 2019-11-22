import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/graphics/logoLG.svg';
import skillsImg from '../assets/graphics/skills.svg';
import {
    githubIcon,
    linkedinIcon,
    twitterIcon
} from '../constants/faIcons';
import About from '../data/aboutData';
import Skills from '../data/skillsData';


export default function Home() {
    return (
        <div className="home-content">
            <div id="logo-splash">
                <img src={logo} alt="Jenna Michaels Logo" />
            </div>
            <div>
                <Link to="/contact">
                    <button data-hover="get in touch"><div>currently for hire</div></button>
                </Link>
            </div>
            <About />
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
                            href="https://www.linkedin.com/in/jenna-michaels/"
                            target="_blank"
                            rel="noopener noreferrer"
                            id="linkedin-link">
                                { linkedinIcon }
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://twitter.com/_jennamichaels"
                            target="_blank"
                            rel="noopener noreferrer"
                            id="twitter-link">
                                { twitterIcon }
                        </a>
                    </li>
                </ul>
            </div>
            <div id="skills-section">
                <div id="skills-img">
                    <img src={ skillsImg } alt="Skills" />
                </div>
                <Skills />
            </div>
            <div>
            <Link to="/work">
                    <button>see my work</button>
                </Link>
            </div>
        </div>
    );
}