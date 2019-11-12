import React from 'react';
import { skillsData } from '../../../data/skillsData';


export default function About() {
    const mappedSkills = skillsData.map(item => {
        return (
            <div className="skills-card" key={item.category}>
                <p id="skill-category">{item.category}</p>
                <p id="skill-list">{item.skills}</p>
            </div>
        )
    });

    return (
        <div id="about-content">
            <div id="about-section">
                <p>
                    I’m a self-taught, front-end web developer, with 15+ years of web and graphic design experience.
                </p>
                
                <p>
                    I have a minimalist design approach: I believe the content, not the design around it, should be the focus of the website. I love finding ways to incorporate fanciful elements on my clients’ websites. Finding the right placement for these subtle details allows me to combine my passion for good design and code.
                </p>

                <p>
                    When not at the computer, I enjoy making things with my hands—whether it’s trying a new recipe, knitting, crocheting, sewing, gardening, or tackling a home improvement venture.
                </p>
            </div>
            <div id="skills-section">
                <h2>
                    Skills
                </h2>
                <div id="skills-container">
                    { mappedSkills }
                </div>
            </div>
        </div>
    );
}