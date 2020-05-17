import React from 'react';
import profile from '../assets/graphics/jennaProfile.jpg';

export default function About() {
	return (
		<div id="about-section">
			<div id="about-image">
				<img src={profile} alt="Jenna Michaels sitting at her desk" />
			</div>
			<div id="about-text">
				<p>
					Jenna resides in Johnstown, Pennsylvania, where she works
					from home as a freelance Graphic Designer and Front-End Web
					Developer. She enjoys working with React, HTML, and CSS.
					With a strong background in graphic arts, she combines her
					skills to create interesting, accessible, beautiful web
					applications.
				</p>

				<p>
					When not working, Jenna can be found hanging out with her
					husband and pup, cooking, crafting, or tackling a home
					improvement venture.
				</p>
			</div>
		</div>
	);
}
