import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "../App.css";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <video src="/videos/video1.mp4" autoPlay loop muted />
      <h1>¿QUE ESPERAS?</h1>
      <p> Descrubre lo asombroso que es el espacio!</p>
      <div className="hero-btns">
        <Link to="/planets">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Planetas
          </Button>
        </Link>

        <Link to="/about">
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            Trailer <i className="far fa-play-circle" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
