import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export const Nav = () => {
	return (
		// <AppBar position="static">
		// 	<Toolbar>
		// 		<span className="logo">__Logo_goes_here__</span>
		// 		<div className={'nav__links'}>
		// 			<>
		// 				<Link
		// 					id={'nav__home-link'}
		// 					className={'nav__link'}
		// 					to="/tech_projects"
		// 				>
		// 					<span color="inherit">Tech Projects</span>
		// 				</Link>
		// 				<Link id={'nav__game-link'} className={'nav__link'} to="/resume">
		// 					<span color="inherit">Resume</span>
		// 				</Link>
		// 			</>
		// 			<Link
		// 				id={'nav__leaderboard-link'}
		// 				className={'nav__link'}
		// 				to="/photography"
		// 			>
		// 				<span color="inherit">Photography</span>
		// 			</Link>
		// 		</div>
		// 	</Toolbar>
		// </AppBar>
		<nav>
			<ul>
				<Link id={'nav__home-link'} className={'nav__link'} to="/">
					<li color="inherit">Home</li>
				</Link>
				<Link
					id={'nav__project-link'}
					className={'nav__link'}
					to="/tech_projects"
				>
					<li color="inherit">Tech Projects</li>
				</Link>
				<Link id={'nav__resume-link'} className={'nav__link'} to="/resume">
					<li color="inherit">Resume</li>
				</Link>
				<Link
					id={'nav__photography-link'}
					className={'nav__link'}
					to="/photography"
				>
					<li color="inherit">Photography</li>
				</Link>
			</ul>
		</nav>
	);
};
