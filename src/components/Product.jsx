import React from "react";
import "../styles/Product.css";

const Product = ({ id, title, image, price, rating }) => {
  return (
    <div className="product__main">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price"> <small>$</small>
          <strong>{price}</strong></p>
        <div className="product__rating">
          {Array(rating).fill().map((_, i) => (
            <p>⭐</p>
          ))}
        </div>
      </div>
      <img
        src={image}
        alt="prod img"
        className="product__img"
      />
      <div className="product__button__container">
        <button className="product__button">Add to basket</button>
      </div>
    </div>
  );
};

export default Product;
