import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './styles.css';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	}
}));

export const Nav = () => {
	return (
		<AppBar position="static">
			<Toolbar>
				<span className="logo">__Logo_goes_here__</span>
				<div className={'nav__links'}>
					<>
						<Link
							id={'nav__home-link'}
							className={'nav__link'}
							to="/tech_projects"
						>
							<span color="inherit">Tech Projects</span>
						</Link>
						<Link id={'nav__game-link'} className={'nav__link'} to="/resume">
							<span color="inherit">Resume</span>
						</Link>
					</>
					<Link
						id={'nav__leaderboard-link'}
						className={'nav__link'}
						to="/photography"
					>
						<span color="inherit">Photography</span>
					</Link>
				</div>
			</Toolbar>
		</AppBar>
	);
};
