import hero from "../assets/hero.png";
import React from "react";
import "../styles/hero.css";

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-image">
          <div className="hero-text">
            <h1 className="hero-name">
              <span className="name-bold">LOUIS</span>
              <br />
              <span className="name-outline">TOMLINSON</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
