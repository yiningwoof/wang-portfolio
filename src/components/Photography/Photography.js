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
  const [photos, setPhotos] = useState([]);

  const categories = {
    Home: "home",
    Animals: "animals",
    Plants: "plants",
    Civilization: "civilization",
    Lights: "lights",
    "Man vs. Wild": "man_wild",
    Mountains: "mountains",
    Homed: "homed"
  };

  const chooseCategory = cat => {
    setCategory(cat);
    axios
      .get(`${baseAPIUrl}${categories[cat]}`)
      .then(res => res.data)
      .then(data => setPhotos(data));
  };

  useEffect(() => {
    axios
      .get(`${baseAPIUrl}home`)
      .then(res => res.data)
      .then(data => {
        setPhotos(data);
        setCategory("Home");
      });
  }, []);

  return (
    <div className="gallery">
      {console.log(category)}
      <div className="gallery-nav">
        <h2>Categories</h2>
        <ul>
          {Object.keys(categories).map(cat => (
            <li>
              <a
                className={`category-button${
                  category === cat ? " active" : ""
                }`}
                onClick={() => chooseCategory(cat)}
              >
                {cat}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* <div className="gallery-grid"> */}
      <div className="grid-cols-3">
        {/* <div className="grid-sizer"></div>
        {photos.map(photo => {
          let url = `https://s3.us-east-2.amazonaws.com/yiningwang.io/${photo.filename}`;
          let styles = {
            backgroundImage: `url(${url})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "absolute",
            left: "0%",
            top: "0px"
          };
          return (
            <div
              className="gallery-item"
              style={styles}
              // style="background: url() center center no-repeat; position: absolute; left: 0%; top: 0px"
            >
              <img src={url} alt={photo.title}></img>
            </div>
          );
        })} */}
        {/* <div className="grid-sizer"></div> */}
        {photos.map(photo => (
          <div
            style={{
              width: "100%",
              height: "300px",
              // margin: "0.5vw",
              border: "solid 4px white",
              paddingBottom: "100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundImage: `url(${`https://s3.us-east-2.amazonaws.com/yiningwang.io/${photo.filename}`})`
            }}
          />
        ))}
      </div>
    </div>

    // <img
    //   src="https://s3.us-east-2.amazonaws.com/yiningwang.io/seattle2.jpg"
    //   alt="toronto"
    // ></img>
  );
};
