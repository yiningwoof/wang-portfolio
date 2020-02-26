import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export const Nav = ({ home }) => {
  console.log(home);
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
        <Link id={"nav__resume-link"} className={"nav__link"} to="/resume">
          <li color="inherit">Resume</li>
        </Link>
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
