import React from "react";
import { Jumbotron } from "react-bootstrap";
import "./Hero.css";

const Hero = () => {
  var styles = {
    backgroundImage: "CTAEMAINBUILDING.jpg",
    backgroundColor: "#3f3d56",
  };
  return (
    <div>
      <Jumbotron className="jumbotron" style={styles}>
        <h1>CTAE-E-LIBRARY</h1>
      </Jumbotron>
    </div>
  );
};

export default Hero;
