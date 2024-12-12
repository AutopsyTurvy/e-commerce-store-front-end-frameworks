




// CheckoutSuccessPage.js



import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CheckoutSuccessPage.css";

function CheckoutSuccessPage({ purchasedItems, total, clearCart }) {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);

        const redirectTimer = setTimeout(() => {
            clearCart();
            navigate("/");
        }, 5000);

        return () => {
            clearInterval(timer);
            clearTimeout(redirectTimer);
        };
    }, [clearCart, navigate]);

    return (
        <div className="checkout-success-container">
            <h1>Thank you for your order!</h1>
            <p>Your order has been successfully placed.</p>
            <div className="order-summary">
                <h2>Order Summary</h2>
                {purchasedItems.length === 0 ? (
                    <p>No items found.</p>
                ) : (
                    <ul className="order-items-list">
                        {purchasedItems.map((item, index) => (
                            <li key={index} className="order-item">
                                <strong>{item.title}</strong> - ${item.discountedPrice.toFixed(2)}
                            </li>
                        ))}
                    </ul>
                )}
                <h3>Total: ${total.toFixed(2)}</h3>
            </div>
            <p>You will be redirected to the store in <strong>{countdown}</strong> seconds.</p>
            <button
                className="back-to-store-button"
                onClick={() => {
                    clearCart();
                    navigate("/");
                }}
            >
                Back to Store
            </button>
        </div>
    );
}

export default CheckoutSuccessPage;
