import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import brain from "./brain.png";

const Logo = () => {
  return (
    <div>
      <Tilt
        className="Tilt shadow-5 br2"
        options={{ max: 60 }}
        style={{ height: 100, width: 100 }}
      >
        <div className="Tilt-inner">
          {" "}
          <img alt="logo" src={brain} />{" "}
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
