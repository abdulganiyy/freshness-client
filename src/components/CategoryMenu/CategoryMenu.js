import React from "react";

import { Link } from "react-router-dom";

import "./CategoryMenu.css";

const CategoryMenu = ({ label, items, footerlabel }) => {
  return (
    <div className="categorymenu">
      <h4>{label}</h4>
      <ul className="nav-items nav-items-underlined">
        {items.map((item) => {
          return (
            <li className=".nav-item-vtl">
              <Link to={`/categories/${item}`}>{item}</Link>
            </li>
          );
        })}
      </ul>
      <div>
        <button className="btn btn-grey">{footerlabel}</button>
      </div>
    </div>
  );
};

export default CategoryMenu;
