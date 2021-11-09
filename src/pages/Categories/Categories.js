import React, { useState } from "react";

import { FaStar } from "react-icons/fa";

import ProductsList from "../../components/Products/ProductsList/ProductsList";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";

import products from "../../products";

import "./Categories.css";

const Categories = ({ match }) => {
  //   const [products, setProducts] = useState([
  //     ...products
  //   ]);
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
      <div>
        HomePage/{match.params.category} <span></span>
      </div>
      <div>
        <span>{match.params.category}</span>
      </div>
      <div>
        {activeRatings.map((item) => (
          <span key={item.id} style={{ color: "red" }}>
            {item.id}
          </span>
        ))}
      </div>
      <div>
        {activeBrands.map((item) => (
          <span key={item.id} style={{ color: "red" }}>
            {item.id}
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
        <ProductsList products={products} />
      </div>
    </div>
  );
};

export default Categories;
