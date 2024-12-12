




// CartPage.js


import React from "react";
import { useNavigate } from "react-router-dom";

function CartPage({ cart, removeFromCart }) {
    const navigate = useNavigate();
    const totalPrice = cart.reduce((total, item) => total + item.discountedPrice, 0);

    return (
        <div>
            <h1>Checkout</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cart.map((item, index) => (
                        <div key={index} style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem" }}>
                            <h2>{item.title}</h2>
                            <p>Price: ${item.discountedPrice.toFixed(2)}</p>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                style={{
                                    marginTop: "0.5rem",
                                    padding: "0.5rem 1rem",
                                    backgroundColor: "red",
                                    color: "white",
                                    border: "none",
                                    cursor: "pointer",
                                }}
                            >
                                Remove Item
                            </button>
                        </div>
                    ))}
                    <h3>Total: ${totalPrice.toFixed(2)}</h3>
                    <button
                        onClick={() => navigate("/checkout-success")}
                        style={{
                            marginTop: "1rem",
                            padding: "0.5rem 1rem",
                            fontSize: "1rem",
                            backgroundColor: "green",
                            color: "white",
                            border: "none",
                            cursor: "pointer",
                        }}
                    >
                        Checkout
                    </button>
                </div>
            )}
        </div>
    );
}

export default CartPage;
