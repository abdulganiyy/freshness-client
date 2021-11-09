import React from "react";

import { FaStar } from "react-icons/fa";

import "./CheckBox.css";

const CheckBox = ({
  brandname,
  label,
  rating,
  activeRatingsHandler,
  activeBrandsHandler,
}) => {
  let onChangeHandler;

  if (rating) {
    onChangeHandler = activeRatingsHandler;
  } else {
    onChangeHandler = activeBrandsHandler;
  }

  return (
    <div className="checkbox-container">
      <input
        className="checkbox"
        type="checkbox"
        name={brandname}
        id={brandname}
        value={rating ? rating : brandname}
        onChange={(e) => onChangeHandler(e)}
      />
      <label htmlFor={brandname} className="checkbox-label">
        <span className="checkbox-button"></span>
        {rating ? (
          <span>
            {Array.from({ length: 5 }).map((item, i) => (
              <FaStar color={i < rating ? "gold" : "grey"} />
            ))}
          </span>
        ) : (
          <span>{label}</span>
        )}
      </label>
    </div>
  );
};

export default CheckBox;
