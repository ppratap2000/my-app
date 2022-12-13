import React from "react";
import "../styles/Subtotal.css";
import CurrencyFormat from "react-currency-format";



function Subtotal() {

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal (0 items): <strong>${value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input className="subtotal__gift__input " type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}

                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparator={true}

            />

            <button className="subtotal__button">Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
