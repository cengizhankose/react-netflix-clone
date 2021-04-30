import React, { useEffect } from "react";
import styles from "./styles.css";
import { BsArrowRightShort } from "react-icons/bs";

const Shows = (props) => {
  return (
    <div className="shows-container">
      <div className="title-container">
        <h2 className="title">{props.title}</h2>
        <BsArrowRightShort size={30} color="white" className="title-arrow" />
      </div>
      <div className="images-container">
        {props.data.map(({ src }, i) => (
          <img src={src} alt="tv-show-image" className="tv-show-image" />
        ))}
      </div>
    </div>
  );
};

export default Shows;
