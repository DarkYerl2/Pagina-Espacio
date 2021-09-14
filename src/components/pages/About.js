import React from "react";
import "../../App.css";

import ReactPlayer from "react-player";

export default function About() {
  return (
    <div className="container-about">
      <div className="about-item">
        <h5>Mira este video para saber mas del universo</h5>
        <ReactPlayer
          url="https://youtu.be/9vTC8co9YAA"
          width="100%"
          height="100%"
          classname="video"
          controls
          playing
          volume="0.8"
        />
      </div>
    </div>
  );
}
