import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import { FaTimes, FaBars } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <nav className="NavbarItems">
      <a href="https://www.ctae.ac.in/">
        <h3 className="navbar-logo">CTAE</h3>
      </a>
      <div className="menu-icon" onClick={handleClick}>
        <div>{clicked ? <FaTimes /> : <FaBars />}</div>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
