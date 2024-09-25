import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Rating = ({ rating }) => {
  return (
    <div className="book__ratings">
      {new Array(Math.floor(rating)).fill(0).map((_, index) => (
        <FontAwesomeIcon key={index} icon={faStar} />
      ))}
      {!Number.isInteger(rating) && (
        <FontAwesomeIcon icon={faStarHalfStroke} />
      )}
    </div>
  );
};

export default Rating;
