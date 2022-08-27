import React from "react";
import "./header.scss";

import { Link, Route } from "react-router-dom";
import { logo } from "../../assets/images";

const Header = () => {
  return (
    <div className="header">
      <div className="header__inner__container">
       <a href="/">
          <div className="header__logo">
            <img src={logo} alt="logo" />
          </div>
       </a>

        <ul className="header__nav">
          <li>
            <a href="#">overview</a>
          </li>
          <li>
            <a href="#">news</a>
          </li>
          <li>
            <a href="#">champions</a>
          </li>
          <li>
            <a href="#">supports</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
