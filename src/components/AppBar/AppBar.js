import React from "react";
import "./AppBar.css";
import Nav1 from "../../img/nav-1.png";
import Nav2 from "../../img/nav-2.png";
import Nav3 from "../../img/nav-3.png";
import Nav4 from "../../img/nav-4.png";
import Nav5 from "../../img/nav-5.png";

const AppBar = () => {
  return (
    <div className="circular-menu active">
      <menu className="items-wrapper">
        <img src={Nav1} alt="kmm" className="menu-item" />
        <img src={Nav2} alt="kdj" className="menu-item" />
        <img src={Nav3} alt="kjf" className="menu-item" />
        <img src={Nav4} alt="kdf" className="menu-item" />
        <img src={Nav5} alt="kdf" className="menu-item" />
      </menu>
    </div>
  );
};

export default AppBar;
