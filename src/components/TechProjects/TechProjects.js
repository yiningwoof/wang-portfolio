import React from "react";
import { Link } from "react-router-dom";
import { YoutubeVideoTile } from "../YoutubeVideoTile/YoutubeVideoTile";
import { TechProjectCard } from "../TechProjectCard/TechProjectCard";

import "./styles.css";

const projects = {
  discore: {
    displayName: "Discore",
    name: "discore",
    videoUrl: "https://www.youtube.com/embed/16PgBSNgw84",
    youtubeUrl: "https://youtu.be/16PgBSNgw84",
    githubUrl: "https://github.com/yiningwoof/dscore_react",
    emoji: "🥏",
    description:
      "Discore is designed for disc golf players to track hole locations and game scores for up to 10 players. Users will never get lost in the woods again. All completed games will get a rank on the leaderboard.",
    techs: [
      "Utilized Rails sessions to store encrypted user information in cookies.",
      "Implemented Redux to store states for accessibility by all components and make actions reusable.",
      "Applied React routers for browser navigation Incorporated Bcrypt for user login validation."
    ]
  },
  illuminight: {
    displayName: "Illuminight",
    name: "illuminight",
    videoUrl: "https://www.youtube.com/embed/cLiHqqfKgcQ",
    youtubeUrl: "https://youtu.be/cLiHqqfKgcQ",
    githubUrl: "https://github.com/bufordeeds/illuminight-client",
    emoji: "💡",
    description:
      "Illuminight is a puzzle game with a simple goal of illuminating all 25 tiles in a 5 x 5 grid. On each click on a tile, the tile, with its orthogonally adjacent ones, turn on or off.",
    techs: [
      "Utilized React hooks for communicating and updating states between components.",
      "Incorporated Material UI and advanced CSS to customize styling.",
      "Implemented user authentication using Bcrypt."
    ]
  },
  penguinFlipper: {
    displayName: "Penguin Flipper",
    name: "penguin-flipper",
    videoUrl: "https://www.youtube.com/embed/o6tyF9u9C8o",
    youtubeUrl: "https://youtu.be/o6tyF9u9C8o",
    githubUrl: "https://github.com/yiningwoof/penguinFlipper",
    emoji: "🐧",
    description:
      "The app is a card-matching game featuring 18 different kinds of penguins around the world. Player scores are based on factors such as total number of matches, time left, and total number of clicks.",
    techs: [
      "Utilized Rails controllers and APIs to render data from database.",
      "Used Vanilla JavaScript and asynchronous / await functionalities for DOM manipulation.",
      "Implemented Rails active storage and Google Cloud Services for multiple images as attachments."
    ]
  },
  instaTrip: {
    displayName: "InstaTrip",
    name: "instatrip",
    videoUrl: "https://www.youtube.com/embed/DWl04NuBXvM",
    youtubeUrl: "https://youtu.be/DWl04NuBXvM",
    githubUrl: "https://github.com/yiningwoof/InstaTrip",
    emoji: "✈️",
    description:
      "InstaTrip is an Instagram + Yelp-like app for discovering famous attractions (cultural, natural, food & drinks) and hidden gems in Austin, TX, designed for both locals and travelers. Users can rate and review sites, upload photos, and save sites to To-Do lists or Loved lists.",
    techs: [
      "Utilized active storage and Google Cloud Services for multiple images uploads.",
      "Implemented Rails MVC for a full-stack delivery of application."
    ]
  }
};

export const TechProjects = () => {
  return (
    <div className="apps-container">
      <h2 className="instruction">Hover on a picture to see a video demo!</h2>
      {Object.values(projects).map((project, i) => (
        <TechProjectCard key={i} {...project} />
      ))}
    </div>
  );
};
