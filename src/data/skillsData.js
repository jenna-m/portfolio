import React from 'react';

export default function Skills() {
	return (
		<div id="skills-container">
			<div className="skills-card">
				<p className="skill-category">Languages</p>
				<p className="skill-list">
					JavaScript, HTML, CSS & Sass, Python3
				</p>
			</div>

			<div className="skills-card">
				<p className="skill-category">Libraries | Frameworks</p>
				<p className="skill-list">React, Redux</p>
			</div>

			<div className="skills-card">
				<p className="skill-category">Deployment</p>
				<p className="skill-list">Netlify, AWS (Lambda, S3)</p>
			</div>

			<div className="skills-card">
				<p className="skill-category">Back-End (novice)</p>
				<p className="skill-list">Node.js, Express</p>
			</div>

			<div className="skills-card">
				<p className="skill-category">Databases (novice)</p>
				<p className="skill-list">MongoDB, MySQL</p>
			</div>

			<div className="skills-card">
				<p className="skill-category">Tools</p>
				<p className="skill-list">VSCode, GitHub, npm</p>
			</div>

			<div className="skills-card">
				<p className="skill-category">Applications</p>
				<p className="skill-list">
					Adobe Photoshop, Illustrator, and XD; Autodesk Fusion 360
				</p>
			</div>

			<div className="skills-card">
				<p className="skill-category">Concepts</p>
				<p className="skill-list">
					Web Accessibility, Wireframing, Responsive Design,
					Mobile-First Development, Git Version Control, Agile
					Methodology
				</p>
			</div>
		</div>
	);
}
