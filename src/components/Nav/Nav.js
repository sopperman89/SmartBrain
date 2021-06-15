import React from "react";
import "./Nav.css";

const Nav = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav>
        <p
          onClick={() => onRouteChange("SignIn")}
          className="pa3 dim underline f4 link pointer grow"
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav>
        <p
          onClick={() => onRouteChange("SignIn")}
          className="pa3 dim underline f4 link pointer grow"
        >
          Sign In
        </p>
        <p
          onClick={() => onRouteChange("Register")}
          className="pa3 dim underline f4 link pointer grow"
        >
          Register
        </p>
      </nav>
    );
  }
};

export default Nav;
