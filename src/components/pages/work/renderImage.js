import React from 'react';

export default class RenderImage extends React.Component {
    render() {
        return (
            <div id="project-image">
                <img src={this.props.imageURL} alt={this.props.alt} />
            </div>
        );
    }
};