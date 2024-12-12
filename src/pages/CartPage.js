




// CartPage.js


import React from "react";
import { useNavigate } from "react-router-dom";
import "./CartPage.css";

function CartPage({ cart, removeFromCart }) {
    const navigate = useNavigate();
    const totalPrice = cart.reduce((total, item) => total + item.discountedPrice, 0);

    return (
        <div className="cart-page-container">
            <h1 className="cart-title">Checkout</h1>
            {cart.length === 0 ? (
                <p className="cart-empty-message">Your cart is empty.</p>
            ) : (
                <div className="cart-items-container">
                    {cart.map((item, index) => (
                        <div key={index} className="cart-item">
                            <div className="cart-item-details">
                                <img
                                    src={item.image.url}
                                    alt={item.image.alt}
                                    className="cart-item-image"
                                />
                                <div>
                                    <h2 className="cart-item-title">{item.title}</h2>
                                    <p className="cart-item-price">Price: ${item.discountedPrice.toFixed(2)}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="cart-remove-button"
                            >
                                Remove Item
                            </button>
                        </div>
                    ))}
                    <div className="cart-total-container">
                        <h3 className="cart-total">Total: ${totalPrice.toFixed(2)}</h3>
                        <button
                            onClick={() => navigate("/checkout-success")}
                            className="checkout-button"
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CartPage;

