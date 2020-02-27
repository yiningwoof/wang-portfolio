import React from "react";
import resume from "./resume.pdf";
import "./styles.css";

export const Resume = () => {
  console.log(resume);
  return (
    <div className="resume-link-container">
      <a
        href={resume}
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: "8vh 50px 25px 50px" }}
      >
        Download Resume
      </a>
    </div>
  );
};
