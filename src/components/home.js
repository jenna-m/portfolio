import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/graphics/logoLG.svg';
import skills from '../assets/graphics/skills.svg';
import {
    contactIcon,
    githubIcon,
    linkedinIcon,
    twitterIcon
} from '../constants/faIcons';
import { skillsData } from '../data/skillsData';


export default function Home() {
    const mappedSkills = skillsData.map(item => {
        return (
            <div className="skills-card" key={item.category}>
                <p id="skill-category">{item.category}</p>
                <p id="skill-list">{item.skills}</p>
            </div>
        )
    });

    return (
        <div className="home-content">
            <div id="logo-splash">
                <img src={logo} alt="Jenna Michaels Logo" />
                <div id="home-text">
                    Front-End Web Developer
                    <br />
                    & Graphic Designer
                </div>
            </div>
            <div>
                <Link to="/contact">
                    <button data-hover="let's talk"><div>currently for hire</div></button>
                </Link>
            </div>
            <div id="about-section">
                <p>
                    I’m a self-taught front-end web developer and graphic designer. Always learning and looking for more opportunities to do so, I am open to freelance projects and full-time remote employment.
                </p>
                
                <p>
                    I believe that websites should be functional, accessible, beautiful, and scalable. I love to find ways to incorporate subtle, fun details in my projects; finding the right placement for these details allows me to combine my passion for good design and code.
                </p>

                <p>
                    When not at the computer, I enjoy making things with my hands—whether it’s trying out a new recipe, a textile project, gardening, or tackling a home improvement venture.
                </p>
                <p>
                And like most all developers, I love coffee.
                </p>
            </div>
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
                        <Link to="/contact"
                            id="contact-link">
                                { contactIcon }
                        </Link>
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
                    <img src={ skills } alt="Skills" />
                </div>
                <div id="skills-container">
                    { mappedSkills }
                </div>
            </div>
            <div>
            <Link to="/work">
                    <button>see my work</button>
                </Link>
            </div>
        </div>
    );
}