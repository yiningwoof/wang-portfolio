import React from "react";
import { Link } from "react-router-dom";
// import resume from "resume.pdf";

import "./styles.css";

export const Nav = ({ home }) => {
  return (
    <nav
      style={
        !home ? { backgroundColor: "#0009" } : { backgroundColor: "#0000" }
      }
    >
      <ul>
        <Link id={"nav__home-link"} className={"nav__link"} to="/">
          <li color="inherit">Home</li>
        </Link>
        <Link
          id={"nav__project-link"}
          className={"nav__link"}
          to="/tech_projects"
        >
          <li color="inherit">Tech Projects</li>
        </Link>
        {/* <Link id={"nav__resume-link"} className={"nav__link"} to="/resume"> */}
        <a
          className="nav__link"
          color="inherit"
          href="resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
        {/* </Link> */}
        <Link
          id={"nav__photography-link"}
          className={"nav__link"}
          to="/photography"
        >
          <li color="inherit">Photography</li>
        </Link>
      </ul>
    </nav>
  );
};
