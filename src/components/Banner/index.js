import React from "react";
import styles from "./styles.css";
import { BiPlay } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Top10 from "../Top10";

const Banner = (props) => {
  return (
    <>
      <div className="banner-background-container">
        <img
          src={props.background}
          alt="top-section-show-image"
          class="banner-background"
        />
      </div>
      <div class="content-container">
        <img src={props.logo} alt="logo" class="logo" />
        <span class="title-container">
          <Top10 />
          <h1 class="title">{props.title}</h1>
        </span>
        <p class="dsc">{props.dsc}</p>
        <div class="btn-container">
          <button class="btn btn-play">
            <BiPlay size={50} class="btn-play-logo" />
            Oynat
          </button>
          <button class="btn btn-info">
            <AiOutlineInfoCircle
              size={35}
              color="white"
              class="btn-info-logo"
            />
            Daha fazla bilgi
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
