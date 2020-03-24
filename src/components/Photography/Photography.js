import React, { useState, useEffect } from "react";
import { render } from "@testing-library/react";
import axios from "axios";

import "./styles.css";

export const Photography = () => {
  const baseAPIUrl =
    "https://yining-wang-portfolio-photo.herokuapp.com/api/v1/photos/";

  // const [home, setHome] = useState([]);
  // const [animals, setAnimals] = useState([]);
  // const [plants, setPlants] = useState([]);
  // const [civilization, setCivilization] = useState([]);
  // const [lights, setLights] = useState([]);
  // const [manWild, setManWild] = useState([]);
  // const [mountains, setMountains] = useState([]);
  // const [homed, setHomed] = useState([]);

  const [category, setCategory] = useState("");
  const [initial, setInitial] = useState(true);

  const categories = [
    "Home",
    "Animals",
    "Plants",
    "Civilization",
    "Lights",
    "Man vs. Wild",
    "Mountains",
    "Homed"
  ];

  useEffect(() => {
    axios
      .get(`${baseAPIUrl}home`)
      .then(res => res.data)
      .then(data => setCategory("Home"));
  }, []);

  return (
    <div className="gallery">
      {console.log(category)}
      <div className="gallery-nav">
        <h2>Categories</h2>
        <ul>
          {categories.map(cat => (
            <li>
              <a
                className={`category-button${
                  category === cat ? " active" : ""
                }`}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="gallery-grid"></div>
    </div>

    // <img
    //   src="https://s3.us-east-2.amazonaws.com/yiningwang.io/seattle2.jpg"
    //   alt="toronto"
    // ></img>
  );
};
