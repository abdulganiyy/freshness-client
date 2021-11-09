import React from "react";

import "./Home.css";
import CategoryMenu from "../../components/CategoryMenu/CategoryMenu";

import downarrow from "../../assets/ic-chevron-down.png";

import ProductCardGrid from "../../components/ProductCards/ProductCardGrid/ProductCardGrid";

const Home = () => {
  return (
    <div className="home">
      <div className="banner">
        <CategoryMenu
          label="Category menu"
          items={[
            "Bakery",
            "Fruits and Vegetables",
            "Meat and Fish",
            "Drinks",
            "Kitchen",
          ]}
          footerlabel="More categories"
        />
        <div className="heros">
          <div className="hero1">
            <div className="hero-contentwrapper">
              <div>Fruits and Vegetables</div>
              <div>
                <button className="btn ">
                  View more...{" "}
                  <img src={downarrow} alt="right" className="down-arrow" />
                </button>
              </div>
            </div>
          </div>
          <div className="hero2">
            <div className="hero-contentwrapper">
              <div>Meat and Fish</div>
              <div>
                <button className="btn ">
                  View more...{" "}
                  <img src={downarrow} alt="right" className="down-arrow" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="best-selling">
        <CategoryMenu
          label="Best Selling Products"
          items={[
            "Bakery",
            "Fruits and Vegetables",
            "Meat and Fish",
            "Drinks",
            "Kitchen",
          ]}
          footerlabel="More products"
        />
        <div className="best-selling_products">
          {[...Array.from(Array(3).keys())].map((_, i) => {
            return <ProductCardGrid />;
          })}
        </div>
      </div>
      <div className="farmers-choice">
        <CategoryMenu
          label="Best from Farmers"
          items={[
            "Bakery",
            "Fruits and Vegetables",
            "Meat and Fish",
            "Drinks",
            "Kitchen",
          ]}
          footerlabel="More products"
        />
        <div className="best-selling_products">
          {[...Array.from(Array(3).keys())].map((_, i) => {
            return <ProductCardGrid />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
