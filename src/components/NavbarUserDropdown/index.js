import React from "react";
import styles from "./styles.css";
import { AiFillCaretDown } from "react-icons/ai";

const NavbarUserDropdown = () => {
  return (
    <div className="NavbarUserDropdown">
      <div className="photoAndIcon">
        <img
          src="https://avatars.githubusercontent.com/u/22226881?v=4"
          alt="user"
          className="userPhoto"
        />
        <AiFillCaretDown />
      </div>
      <ul className="dropdown">
        <li>Other User</li>
        <li>Other User</li>
        <li>Other User</li>
        <li>Other User</li>
        <li>Profil Yönetimi</li>
        <hr />
        <li>Hesap</li>
        <li>Yardım Merkezi</li>
        <li>Netflix oturumunu kapat</li>
      </ul>
    </div>
  );
};

export default NavbarUserDropdown;
