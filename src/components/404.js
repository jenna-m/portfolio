import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImg from '../assets/graphics/404.svg';

export default function NotFound() {
    return (
        <div className="_404-content">
            <div id="_404-image">
                <img src={ notFoundImg } alt="404" />
            </div>
            <div id="_404-text">
                <h2>Sorry...</h2>
                <p>An error has occured, and the requested page was not found.</p>
                <Link to="/">
                    <button>Let's go home</button></Link>
            </div>
        </div>
    );
}