import React from "react";
import { YoutubeVideoTile } from "../YoutubeVideoTile/YoutubeVideoTile";

import "./styles.css";

export const TechProjectCard = ({
  name,
  videoUrl,
  youtubeUrl,
  githubUrl,
  emoji,
  displayName,
  description,
  techs
}) => {
  return (
    <div className="card" style={{ display: "flex", padding: "32px" }}>
      <div style={{ width: "40%", height: "auto" }}>
        <YoutubeVideoTile
          thumbnailUrl={`${name}-cover.png`}
          videoUrl={videoUrl}
        />
      </div>
      <div className="description-container">
        <span role="img" aria-label="app emoji">
          {emoji}
        </span>
        <h3 style={{ display: "inline-block", padding: "8px" }}>
          {`  ${displayName}  `}
        </h3>
        <span role="img" aria-label="emoji" style={{ display: "inline-block" }}>
          {emoji}
        </span>
        <h4>{description}</h4>
        {techs.map((tech, i) => (
          <p key={i} id={name}>
            {tech}
          </p>
        ))}
        <a
          style={{ display: "inline-block", padding: "4px" }}
          className="link"
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="logo" src="github.png" alt="github logo"></img>
        </a>
        <a
          style={{ display: "inline-block", padding: "4px" }}
          className="link"
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="logo" src="youtube.png" alt="youtube logo"></img>
        </a>
      </div>
    </div>
  );
};
