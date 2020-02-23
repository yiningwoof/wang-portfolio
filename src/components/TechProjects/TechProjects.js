import React from "react";
import { Link } from "react-router-dom";
import { YoutubeVideoTile } from "../YoutubeVideoTile/YoutubeVideoTile";

import "./styles.css";

export const TechProjects = () => {
  return (
    <div className="apps-container">
      <a
        className="card"
        href="https://youtu.be/16PgBSNgw84"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "flex", padding: "32px" }}
      >
        <div style={{ width: "30%", height: "auto" }}>
          <YoutubeVideoTile
            thumbnailUrl="discore-cover.png"
            videoUrl="https://www.youtube.com/embed/16PgBSNgw84"
          />
        </div>
        {/* <img
          src="discore-cover.png"
          alt="app_thumbnail"
          style={{ width: "30%", borderRadius: "4px" }}
        /> */}
        <div className="container">
          <h3>
            <b>John Doe</b>
          </h3>
          <h4>Architect & Engineer</h4>
          <p>
            I'm bloken, fix me please{" "}
            <span role="img" aria-label="sad emoji">
              😢
            </span>
          </p>
        </div>
      </a>
      <a
        className="card"
        href="https://youtu.be/DWl04NuBXvM"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="instatrip-cover.png"
          alt="app_thumbnail"
          style={{ width: "30%" }}
        />
        <div className="container">
          <h3>
            <b>John Doe</b>
          </h3>
          <h4>Architect & Engineer</h4>
          <p>
            I'm bloken, fix me please{" "}
            <span role="img" aria-label="sad emoji">
              😢
            </span>
          </p>
        </div>
      </a>
      <a
        className="card"
        href="https://youtu.be/cLiHqqfKgcQ"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="illuminight-cover.png"
          alt="app_thumbnail"
          style={{ width: "30%" }}
        />
        <div className="container">
          <h3>
            <b>John Doe</b>
          </h3>
          <h4>Architect & Engineer</h4>
          <p>
            I'm bloken, fix me please{" "}
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
        <img
          src="penguin-flipper-cover.png"
          alt="app_thumbnail"
          style={{ width: "30%" }}
        />
        <div className="container">
          <h3>
            <b>John Doe</b>
          </h3>
          <h4>Architect & Engineer</h4>
          <p>
            I'm bloken, fix me please{" "}
            <span role="img" aria-label="sad emoji">
              😢
            </span>
          </p>
        </div>
      </a>
    </div>
  );
};
