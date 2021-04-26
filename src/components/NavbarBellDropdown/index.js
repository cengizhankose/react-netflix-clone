import React from "react";
import styles from "./styles.css";
import { BsFillBellFill } from "react-icons/bs";

const NavbarUserDropdown = () => {
  return (
    <div className="NavbarBellDropdown">
      <BsFillBellFill size={23} color="white" />
      <ul className="dropdown">
        <li>Film Component</li>
        <li>Film Component</li>
        <li>Film Component</li>
        <li>Film Component</li>
        <li>Film Component</li>
        <li>Film Component</li>
        <li>Film Component</li>
        <li>Film Component</li>
        <li>Film Component</li>
        <li>Film Component</li>
        <li>Film Component</li>
        <li>Film Component</li>
        <li>Film Component</li>
      </ul>
    </div>
  );
};

export default NavbarUserDropdown;
