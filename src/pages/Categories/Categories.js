import React, { useState } from "react";

import { FaGripHorizontal, FaList, FaTimes } from "react-icons/fa";

import ProductsGrid from "../../components/Products/ProductsGrid/ProductsGrid";
import ProductsList from "../../components/Products/ProductsList/ProductsList";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";

import data from "../../products";

import "./Categories.css";

const Categories = ({ match }) => {
  const [products] = useState([...data]);
  const [isList, setIsList] = useState(true);
  const [activeBrands, setActiveBrands] = useState([]);
  const [activeRatings, setActiveRatings] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000000);

  const changeListMode = () => {
    setIsList((isList) => !isList);
  };

  const activeBrandsHandler = (e) => {
    const { value, checked } = e.target;

    console.log(value, checked);

    if (!checked) {
      setActiveBrands([...activeBrands.filter((brand) => brand.id !== value)]);
    } else {
      setActiveBrands([...activeBrands, { id: value }]);
    }
  };

  const activeRatingsHandler = (e) => {
    const { value, checked } = e.target;

    console.log(value, checked);

    if (!checked) {
      setActiveRatings([
        ...activeRatings.filter((rating) => rating.id !== value),
      ]);
    } else {
      setActiveRatings([...activeRatings, { id: value }]);
    }
  };

  const handleRangeInput = (e) => {
    setMinPrice(e.minValue);
    setMaxPrice(e.maxValue);
  };

  return (
    <div>
      <div className="category-label">
        <span>HomePage/{match.params.category}</span>
      </div>
      <div className="categories-header">
        {match.params.category}
        <div>
          <span
            style={{ marginRight: ".8rem", cursor: "pointer" }}
            onClick={() => changeListMode()}
          >
            <span
              style={{ display: "inline-block", transform: "translateY(3px)" }}
            >
              <FaGripHorizontal />
            </span>
            Grid View
          </span>
          <span
            style={{ marginRight: ".8rem", cursor: "pointer" }}
            onClick={() => changeListMode()}
          >
            <span
              style={{ display: "inline-block", transform: "translateY(3px)" }}
            >
              <FaList />
            </span>
            List View
          </span>
          <span>{products.length}</span>products
        </div>
      </div>

      <div className="filters">
        Applied filters:
        {activeRatings.map((item) => (
          <span key={item.id} className="filter">
            {item.id} star{" "}
            <span className="filter-cancel">
              <FaTimes />
            </span>
          </span>
        ))}{" "}
        {activeBrands.map((item) => (
          <span key={item.id} className="filter">
            {item.id}{" "}
            <span className="filter-cancel">
              <FaTimes />
            </span>
          </span>
        ))}
      </div>
      <div className="categories">
        <CategoryFilter
          maxPrice={maxPrice}
          minPrice={minPrice}
          handleRangeInput={handleRangeInput}
          activeBrandsHandler={activeBrandsHandler}
          activeRatingsHandler={activeRatingsHandler}
        />
        {isList ? (
          <ProductsList products={products} />
        ) : (
          <ProductsGrid products={products} />
        )}
      </div>
    </div>
  );
};

export default Categories;
