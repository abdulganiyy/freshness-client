import React from "react";

import "./ProductCardGrid.css";

const ProductCardGrid = () => {
  const product = {
    name: "Fresh Apple ",
    description:
      "Fresh Apple with a refreshing taste that helps nourish the body, It contains required body nutrients ranging from vitamins to minerals",
    img: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    price: "30",
    discount: "14.67",
    freshness: "Fresh",
    avgRating: "4",
    inStock: "200",
    deliveredTo: "Ilorin",
    estimatedDeliveryDays: "1",
    freeDelivery: "free",
  };
  return (
    <div className="product-cardgrid">
      <div className="product-cardgrid_content">
        <img className="product-cardgrid_img" src={product.img} alt="product" />
        <h4 className="product-cardgrid_title">{product.name}</h4>
        <p className="product-cardgrid_description">{`${product.description}`}</p>
        <div className="product-cardgrid_footer">
          <span className="product-cardgrid_price">
            {product.price},000 NGN
          </span>{" "}
          <button className="btn btn-dark"> Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardGrid;
