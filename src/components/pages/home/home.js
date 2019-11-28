import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo';
import About from '../../../data/aboutData';
import Social from '../../../data/socialData';
import skillsImg from '../../../assets/graphics/skills.svg';
import Skills from '../../../data/skillsData';

export default function Home() {
	return (
		<div className="home-content">
			<Logo />
			<div>
				<Link to="/contact">
					<button data-hover="get in touch">
						<div>currently for hire</div>
					</button>
				</Link>
			</div>
			<About />
			<Social />
			<div id="skills-section">
				<div id="skills-img">
					<img src={skillsImg} alt="Skills" />
				</div>
				<Skills />
			</div>
			<div>
				<Link to="/work">
					<button>see my work</button>
				</Link>
			</div>
		</div>
	);
}
