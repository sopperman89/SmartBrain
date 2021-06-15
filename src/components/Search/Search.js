import React from "react";
import "./Search.css";

const Search = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p>Where are the faces?!</p>
      <div className="center">
        <div className="form pa3 shadow-5 br3">
          <input
            onChange={onInputChange}
            type="text"
            placeholder="Enter URL here"
            className="w-70 tc pa1"
          />
          <button className="w-200" onClick={onButtonSubmit}>
            Find Them!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
