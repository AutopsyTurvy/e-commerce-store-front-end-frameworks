




// CartPage.js


import React from "react";

function CartPage({ cart }) {
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
                        </div>
                    ))}
                    <h3>Total: ${totalPrice.toFixed(2)}</h3>
                </div>
            )}
            <button style={{ marginTop: "1rem", padding: "0.5rem 1rem", fontSize: "1rem" }}>
                Proceed to Payment
            </button>
        </div>
    );
}

export default CartPage;
