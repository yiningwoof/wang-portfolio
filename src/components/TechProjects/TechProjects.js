import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export const TechProjects = () => {
	return (
		<div className="apps-container">
			<a
				className="card"
				href="https://youtu.be/16PgBSNgw84"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src="app1.jpg" alt="app_thumbnail" style={{ width: '30%' }} />
				<div className="container">
					<h3>
						<b>John Doe</b>
					</h3>
					<h4>Architect & Engineer</h4>
					<p>
						I'm bloken, fix me please{' '}
						<span role="img" aria-label="sad emoji">
							😢
						</span>
					</p>
				</div>
			</a>
			<a
				className="card"
				href="https://youtu.be/o6tyF9u9C8o"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src="app2.jpg" alt="app_thumbnail" style={{ width: '30%' }} />
				<div className="container">
					<h3>
						<b>John Doe</b>
					</h3>
					<h4>Architect & Engineer</h4>
					<p>
						I'm bloken, fix me please{' '}
						<span role="img" aria-label="sad emoji">
							😢
						</span>
					</p>
				</div>
			</a>
		</div>
	);
};
