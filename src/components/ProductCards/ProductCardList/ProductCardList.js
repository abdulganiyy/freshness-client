import React from "react";

import "./ProductCardList.css";

const ProductCardList = ({ product }) => {
  //   const product = {
  //     name: "Fresh Apple ",
  //     description:
  //       "Fresh Apple with a refreshing taste that helps nourish the body, It contains required body nutrients ranging from vitamins to minerals",
  //     img: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
  //     price: "30",
  //     discount: "14.67",
  //     freshness: "Fresh",
  //     farm: "Farm Pride",
  //     avgRating: "4",
  //     stock: "200",
  //     deliveredTo: "Ilorin",
  //     estimatedDeliveryDays: "1",
  //     deliveryMode: "free",
  //   };
  return (
    <div className="product-cardlist">
      <img className="product-cardlist_img" src={product.img} alt="product" />
      <div className="product-cardlist_content">
        <div className="product-cardlist_content-left">
          <span className="product-cardlist_title">{product.name}</span>
          <span className="product-cardlist_description">
            {truncate(product.description, 50)}
          </span>
          <div className="product-cardlist_content-left-footer">
            <div>
              <span>Freshness</span>
              <span>Farm</span>
              <span>Delivery</span>
              <span>Stock</span>
            </div>
            <div>
              <span>{product.freshness}</span>
              <span>{product.farm}</span>
              <span>{product.deliveredTo}</span>
              <span>{product.stock} pcs</span>
            </div>
          </div>
        </div>
        <div className="product-cardlist_content-right">
          <div className="product-cardlist_prices">
            <span>{product.price} NGN</span>
          </div>
          <div className="product-cardlist_deliverymodes">
            <span>{product.deliveryMode} Shipping</span>
            <span>Delivery in {product.estimatedDeliveryDays} day(s) </span>
          </div>
          <div className="action-buttons">
            <div>
              <button className="btn btn-dark">Product Detail</button>
            </div>
            <div>
              <button className="btn btn-grey">Add to Wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardList;

function truncate(str, n) {
  return str.length > n ? str.substr(0, n - 1) + "..." : str;
}
