import React from "react";

import { Link } from "react-router-dom";

import downarrow from "../../assets/ic-chevron-down.png";

import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <ul className="nav-items">
        <li className="nav-item-htl">
          <Link to="/">
            Bakery <img src={downarrow} alt="right" className="down-arrow" />
          </Link>
        </li>
        <li className="nav-item-htl">
          <Link to="/">
            Fruits and Vegetables{" "}
            <img src={downarrow} alt="right" className="down-arrow" />
          </Link>
        </li>
        <li className="nav-item-htl">
          <Link to="/">
            Meat and Fish{" "}
            <img src={downarrow} alt="right" className="down-arrow" />
          </Link>
        </li>
        <li className="nav-item-htl">
          <Link to="/">
            Drinks <img src={downarrow} alt="right" className="down-arrow" />
          </Link>
        </li>
        <li className="nav-item-htl">
          <Link to="/">
            Kitchen <img src={downarrow} alt="right" className="down-arrow" />
          </Link>
        </li>
        <li className="nav-item-htl">
          <Link to="/">
            Special Nutrition{" "}
            <img src={downarrow} alt="right" className="down-arrow" />
          </Link>
        </li>
        <li className="nav-item-htl">
          <Link to="/">
            Baby <img src={downarrow} alt="right" className="down-arrow" />
          </Link>
        </li>
        <li className="nav-item-htl">
          <Link to="/">
            Pharmacy <img src={downarrow} alt="right" className="down-arrow" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
