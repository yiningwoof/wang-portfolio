import React, { useState } from "react";

export const YoutubeVideoTile = ({ thumbnailUrl, videoUrl, videoTitle }) => {
  const [showVideo, setShowVideo] = useState(false);
  const handleMouseEnter = () => {
    setShowVideo(true);
  };
  const handleMouseLeave = () => {
    setShowVideo(false);
  };
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      {showVideo ? (
        <iframe
          style={{ width: "100%", height: "100%", position: "absolute" }}
          title={videoTitle}
          src={`${videoUrl}?autoplay=1`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : null}
      <img
        style={{ width: "100%", height: "auto" }}
        src={thumbnailUrl}
        alt=""
      />
    </div>
  );
};
