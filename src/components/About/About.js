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
        className="link"
        href={resume}
        target="_blank"
        rel="noopener noreferrer"
        // style={{ margin: "8vh 50px 25px 50px" }}
      >
        Resume
      </a>
      <a className="link" href="mailto: yining.wang@utexas.edu">
        yining.wang@utexas.edu
      </a>
      <div className="logo-container">
        <a
          href="https://medium.com/@daphnewang0826"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="logo" src="medium.png" alt="github logo"></img>
        </a>
        <a
          href="https://github.com/yiningwoof"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="logo" src="github.png" alt="github logo"></img>
        </a>
        <a
          href="https://www.linkedin.com/in/yining-wang-9b8391114/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="logo" src="linkedin.png" alt="github logo"></img>
        </a>
      </div>
    </div>
  );
};
