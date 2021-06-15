import React from "react";
import ReactDOM from "react-dom";
import "tachyons";
import App from "./containers/App";
import "./index.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
