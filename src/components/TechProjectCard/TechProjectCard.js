import React from 'react';
import { YoutubeVideoTile } from '../YoutubeVideoTile/YoutubeVideoTile';

import './styles.css';

export const TechProjectCard = ({
	name,
	videoUrl,
	emoji,
	displayName,
	description,
	techs
}) => {
	return (
		<div
			className="card"
			target="_blank"
			rel="noopener noreferrer"
			style={{ display: 'flex', padding: '32px' }}
		>
			<div style={{ width: '40%', height: 'auto' }}>
				<YoutubeVideoTile
					thumbnailUrl={`${name}-cover.png`}
					videoUrl={videoUrl}
				/>
			</div>
			<div className="container">
				<span
					role="img"
					aria-label="app emoji"
					style={{ display: 'inline-block' }}
				>
					{emoji}
				</span>

				<h3 style={{ display: 'inline-block', padding: '8px' }}>
					{`  ${displayName}  `}
				</h3>

				<span
					role="img"
					aria-label="sad emoji"
					style={{ display: 'inline-block' }}
				>
					{emoji}
				</span>
				<h4>{description}</h4>
				{techs.map((tech, i) => (
					<p key={i} id={name}>
						{tech}
					</p>
				))}
			</div>
		</div>
	);
};
