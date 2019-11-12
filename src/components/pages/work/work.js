import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { workData } from '../../../data/workData';


class Work extends React.Component {
    render() {
        // declare const for mapped project info
        const mappedProjects = workData.map(project => {

            // conditionally render GitHub link
            const showGithub = () => {
                if (project.github) {
                    return (
                        <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                    );
                } 
                return null;
            }

            // conditionally render website link
            const showWebsite = () => {
                if (project.websiteURL) {
                    return (
                        <a href={project.websiteURL} target="_blank" rel="noopener noreferrer">Website</a>
                    );
                }
                return null;
            }

            // return mapped project
            return (
                <div id="project-card" key={project.id}>
                    <div id="project-card-sidebar">
                        <h2 id="project-card-header">
                        <Link to={{
                            pathname: `/project`,
                            search: `id=${project.id}`
                        }}>
                            {project.title}
                        </Link>
                        </h2>
                        <h4 id="project-card-year">
                            {project.year}
                        </h4>
                        <h3 id="project-card-category">
                            {project.displayCategory}
                        </h3>
                        <ul id="project-card-links">
                            <li><Link to={{
                                pathname: `/project`,
                                search: `id=${project.id}`
                            }}>Details</Link></li>
                            <li>{ showGithub() }</li>
                            <li>{ showWebsite() }</li>
                        </ul>
                    </div>
                    <div id="project-card-img">
                        <Link to={{
                            pathname: `/project`,
                            search: `id=${project.id}`
                        }}>
                            <img src={project.src[0]} alt={project.title} />
                        </Link>
                    </div>
                </div>
            )
        })
        
        return (
            <div className="work-content">
                <div id="mapped-projects">
                    { mappedProjects }
                </div>
            </div>
        );
    }
}

export default withRouter(Work);