import React, { useEffect } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TechProjects } from './components/TechProjects/TechProjects';
import { Home } from './components/Home/Home';
import { Resume } from './components/Resume/Resume';

import './App.css';

import { Nav } from './components/Nav/Nav';
// import { Home } from './components/Home/Home';

function App() {
	useEffect(() => {});

	// check the url path, if '/' opaque false if '/*' opaque trye

	return (
		<>
			<Nav opaque={true} />
			{/* <TechProjects /> */}
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/tech_projects">
					<TechProjects />
				</Route>
				<Route path="/resume">
					<Resume></Resume>
				</Route>
				<Route path="/photography">{/* <Photography /> */}</Route>
			</Switch>
		</>
	);
}

export default withRouter(App);
