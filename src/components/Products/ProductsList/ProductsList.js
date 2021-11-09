import React from "react";

import ProductCardList from "../../ProductCards/ProductCardList/ProductCardList";

import "./ProductsList.css";

const ProductsList = ({ products }) => {
  return (
    <div className="products-list">
      {products.map((product, i) => {
        return <ProductCardList product={product} key={i} />;
      })}
    </div>
  );
};

export default ProductsList;

// [...Array.from(Array(3).keys())]
