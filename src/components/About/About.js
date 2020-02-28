import React from "react";
import resume from "./resume.pdf";
import "./styles.css";

export const About = () => {
  console.log(resume);
  return (
    <div className="about-container">
      <img
        className="portrait"
        src="portrait.JPG"
        alt="portrait of Yining Wang"
      ></img>
      <h2>Hi! I'm Yining.</h2>
      <p>
        I'm a motivated Software Engineer fluent in programming and data
        manipulation in JavaScript, Python, and Ruby. I have worked primarily in
        building API with Rails and Node.js and using React, Redux for front-end
        development. Problem solving is my biggest motivation and I'm always
        finding new challenges to conquer. When I'm not developing software, I
        enjoy a wide range of things including landscape photography, reading,
        and video games.
      </p>
      <a
        href={resume}
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: "8vh 50px 25px 50px" }}
      >
        Resume
      </a>
    </div>
  );
};
