import React from 'react';
import "./AppBar.css";
import Nav1 from '../../img/nav-1.png';
import Nav2 from '../../img/nav-2.png';
import Nav3 from '../../img/nav-3.png';
import Nav4 from '../../img/nav-4.png';
import Nav5 from '../../img/nav-5.png';

const AppBar = () => {
   return <div class="circular-menu active">
 <menu class="items-wrapper">
    <img src={Nav1} alt="kmm" class="menu-item" />
    <img src={Nav2} alt="kdj" class="menu-item" />
    <img src={Nav3} alt="kjf" class="menu-item" />
    <img src={Nav4} alt="kdf" class="menu-item" />
    <img src={Nav5} alt="kdf" class="menu-item" />
  </menu>
    </div>
   
};

export default AppBar;