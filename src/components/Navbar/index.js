import logo from "../../img/netflix-logo-png-2562.png";
import React from "react";
import styles from "./styles.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineGift } from "react-icons/ai";
import UserDropdown from "../NavbarUserDropdown";
import BellDropdown from "../NavbarBellDropdown";

const Navbar = () => {
  return (
    <nav>
      <div className="logo-navMenu-container">
        <div className="logo">
          <a href="">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <ul className="navMenu">
          <a href="">
            <li>Ana Sayfa</li>
          </a>
          <a href="">
            <li>Diziler</li>
          </a>
          <a href="">
            <li>Filmler</li>
          </a>
          <a href="">
            <li>Yeni ve Popüler</li>
          </a>
          <a href="">
            <li>Listem</li>
          </a>
        </ul>
      </div>
      <div className="icons-user-container">
        <a href="">
          <BiSearchAlt2 size={25} color="white" />
        </a>
        <a href="">
          <AiOutlineGift size={25} color="white" />
        </a>
        <a href="">
          <BellDropdown />
        </a>
        <a href="">
          <UserDropdown />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
