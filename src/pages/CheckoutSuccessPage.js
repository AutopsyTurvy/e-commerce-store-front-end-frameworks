




// CheckoutSuccessPage.js



import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CheckoutSuccessPage({ purchasedItems, total, clearCart }) {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            clearCart(); 
            navigate("/");
        }, 5000);

        return () => clearTimeout(timer); 
    }, [clearCart, navigate]);

    return (
        <div style={{ textAlign: "center", marginTop: "2rem", padding: "1rem", backgroundColor: "#f9f9f9" }}>
            <h1 style={{ color: "green" }}>Thank you for your order!</h1>
            <p>Your order has been successfully placed.</p>
            <div style={{ margin: "1rem auto", maxWidth: "600px", textAlign: "left" }}>
                <h2>Order Summary</h2>
                {purchasedItems.length === 0 ? (
                    <p>No items found.</p>
                ) : (
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                        {purchasedItems.map((item, index) => (
                            <li key={index} style={{ borderBottom: "1px solid #ccc", padding: "0.5rem 0" }}>
                                <strong>{item.title}</strong> - ${item.discountedPrice.toFixed(2)}
                            </li>
                        ))}
                    </ul>
                )}
                <h3 style={{ marginTop: "1rem" }}>Total: ${total.toFixed(2)}</h3>
            </div>
            <p>You will be redirected to the store in 5 seconds.</p>
            <p>
                <a
                    href="/"
                    style={{ color: "blue", textDecoration: "underline" }}
                    onClick={(e) => {
                        e.preventDefault();
                        clearCart(); 
                        navigate("/"); 
                    }}
                >
                    Back to Store
                </a>
            </p>
        </div>
    );
}

export default CheckoutSuccessPage;
