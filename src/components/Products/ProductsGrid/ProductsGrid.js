import React from "react";

import "./ProductsGrid.css";

import ProductCardGrid from "../../ProductCards/ProductCardGrid/ProductCardGrid";

const ProductsGrid = ({ products }) => {
  return (
    <div className="products-grid">
      {products.map((product, i) => {
        return <ProductCardGrid product={product} key={i} />;
      })}
    </div>
  );
};

export default ProductsGrid;
