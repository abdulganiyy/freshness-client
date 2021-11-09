import React from "react";
import Searchbox from "../SearchBox/Searchbox";

import usericon from "../../assets/ic-actions-user.png";
import carticon from "../../assets/ic-ecommerce-cart.png";

import Menu from "../Menu/Menu";

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header_primary">
        <div className="logo_box">Freshnesscom</div>
        <div>
          <Searchbox />
        </div>
        <div>
          <ul className="nav-items">
            <li className="nav-item-htl">
              <img src={usericon} alt="user" />
            </li>
            <li className="nav-item-htl">
              <img src={carticon} alt="cart" />
            </li>
          </ul>
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default Header;
