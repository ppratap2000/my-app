import React from 'react';
import "../styles/CheckoutProduct.css";

const CheckoutProduct = () => {
    return (
        <div className="checkoutProduct">
            <img src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg" alt="cart_prod_img" className="checkoutProduct__image" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)
                </p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>300</strong>
                </p>
                <div className="checkoutProduct__rating">
                    ⭐⭐
                </div>
            </div>
            <button className='checkoutProduct__info__button' >Remove from Basket</button>



        </div>

    )

}

export default CheckoutProduct
