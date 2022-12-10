import React from "react";
import "../styles/Product.css";

const Product = () => {
  return (
    <div className="product__main">
      <div className="product__info">
        <p>Title</p>
        <p className="product__price">$30</p>
        <div className="product__rating">⭐⭐⭐</div>
      </div>
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
        alt=""
        className="product__img"
      />
      <button className="product__button">Add to basket</button>
    </div>
  );
};

export default Product;
