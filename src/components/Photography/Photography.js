import React, { useState, useEffect } from "react";
import { render } from "@testing-library/react";
import axios from "axios";

import { Modal } from "../Modal/Modal.js";

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
  const [inspectedPhoto, setInspectedPhoto] = useState("");

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

  const inspectPhoto = url => {
    setInspectedPhoto(url);
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
      <Modal></Modal>
      <div className="grid-cols-3">
        {photos.map(photo => {
          let photoUrl = `url(${`https://s3.us-east-2.amazonaws.com/yiningwang.io/${photo.filename}`})`;
          return (
            <div>
              {/* <div
                className="grid-item"
                style={{
                  width: "100%",
                  height: "300px",
                  // margin: "0.5vw",
                  border: "solid 4px white",
                  paddingBottom: "100%",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundImage: `${photoUrl}`
                }}
                onClick={() => inspectPhoto(photoUrl)}
              /> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};
