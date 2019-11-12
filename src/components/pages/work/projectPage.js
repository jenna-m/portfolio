import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { workData } from '../../../data/workData';
import { desktopIcon, mobileIcon } from '../../../constants/faIcons';
import RenderAllImages from './renderAllImages';


class ProjectPage extends React.Component {
    constructor(props) {
        super(props);

        let currentProjectID = new URLSearchParams(window.location.search).get("id");

        if (currentProjectID) {
            currentProjectID = parseInt(currentProjectID, 10);
        }

        this.state = {
            project: workData.find(project => project.id === currentProjectID)
        };
    };

    render() {
        const project = this.state.project;

        // conditionally render Desktop/Mobile icons (for web projects only)
        const showDesktopMobileIcons = () => {
            if (project.category === 'web') {
                return (
                    <ul id="desktop-mobile-icons">
                        <li>{ desktopIcon }</li>
                        <li>{ mobileIcon }</li>
                    </ul>
                )
            }
        }

        // conditionally render github and/or website links (for web projects only)
        const showLinks = () => {
            const gitHubLink = 
            <a 
            href={project.github}
            target="_blank"
            rel="noopener noreferrer">
                GitHub
            </a>;

            const websiteLink = 
            <a 
            href={project.websiteURL}
            target="_blank"
            rel="noopener noreferrer">
                Website
            </a>;

            // renders both gitHub and website links
            if (project.github && project.websiteURL) {
                return (
                    <ul id="project-links">
                        <li>{ gitHubLink }</li>
                        <li>{ websiteLink }</li>
                    </ul>
                )
            }
            // renders only github link
            if (project.github) {
                return (
                    <ul id="project-links">
                        <li>{ gitHubLink }</li>
                    </ul>
                )
            }
            // renders only website link
            if (project.websiteURL) {
                return (
                    <ul id="project-links">
                        <li>{ websiteLink }</li>
                    </ul>
                )
            }
            return null;
        }

        return (
            <div className="project-content">
                <div id="project-details">
                    <div id="breadcrumb">
                        <ul>
                            <li><Link to='/work'>Work</Link></li>
                            <li>{project.displayCategory}</li>
                        </ul>
                    </div>
                    <div id="project-text">
                        <div id="project-title">
                            <h2>{project.title}</h2>
                            { showDesktopMobileIcons() }
                            <p id="made-with">Made with {project.tools}</p>
                            { showLinks() }
                        </div>
                        <div id="project-description">
                            <p id="description">{project.description}</p>
                        </div>
                    </div>
                    <RenderAllImages />
                </div>
            </div>
        );
    }
}

export default withRouter(ProjectPage);