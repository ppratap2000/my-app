import React from 'react';
import "../styles/Checkout.css";
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import Header from "../components/Header"

const Checkout = () => {
  return (
    <>
      <Header />
      <div className="checkout">
        <div className="checkout__left">

          <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout__ad" />


          <div>
            <h2 className="checkout__title">
              Your Shopping Basket
            </h2>

            <CheckoutProduct />
            <CheckoutProduct />



          </div>
        </div>

        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    </>
  )
}

export default Checkout;

