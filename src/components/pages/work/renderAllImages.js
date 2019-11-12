import React from 'react';
import RenderImage from './renderImage';
import { workData } from '../../../data/workData';
import { backIcon } from '../../../constants/faIcons';



export default class RenderAllImages extends React.Component {
    constructor(props) {
        super(props);

        let projectItemId = new URLSearchParams(window.location.search).get("id");
        
        if (projectItemId) {
            projectItemId = parseInt(projectItemId, 10);
        }

        this.state = {
          project: workData.find(project => project.id === projectItemId)
        };
    }

    render() {
        const project = this.state.project

        // declare an array to be rendered by ItemImages component
        const allImages = [];
        // add each SRC to desktopImages array
        project.src.forEach( (src, i, title) => {
            allImages.push(<RenderImage imageURL={src} key={i} alt={title} />)
        });


        // backButton to take user to beginning of page
        const reposition = () => {
            window.scrollTo(0, 0);
        }
        
        const backButton = () => {
            return (
                <button id="back-button" onClick={reposition}>{backIcon}</button>
            )
        }

        return (
            <section id="all-project-images">
                { allImages }
                { backButton() }
            </section>
        );
    }
};