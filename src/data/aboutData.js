import React from 'react';
import profile from '../assets/graphics/jennaProfile.jpg';

export default function About() {
	return (
		<div id="about-section">
			<div id="about-image">
				<img src={profile} alt="Portrait of Jenna Michaels" />
			</div>
			<div id="about-text">
				<p>
					Jenna Michaels resides in Johnstown, Pennsylvania, where she
					works from home as a freelance Front-End Web Developer. She
					enjoys working with React, HTML, and CSS. With a strong
					background in graphic arts, she strives to fuse her skills
					to create functional, accessible, scalable, and beautiful
					web applications.
				</p>

				<p>
					When not at the computer, Jenna can be found hanging out
					with her husband and pup, making summer rolls, knitting up a
					storm, or tackling a home improvement venture.
				</p>
			</div>
		</div>
	);
}
