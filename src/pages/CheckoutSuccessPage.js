import React from "react";
import { Link } from "react-router-dom";

function CheckoutSuccessPage({ clearCart }) {
    // Note-- this section should clear the page when the cart loads
    React.useEffect(() => {
        clearCart();
    }, [clearCart]);

    return (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <h1>Thank you for your order!</h1>
            <p>Your order has been successfully placed.</p>
            <Link to="/" style={{ color: "blue", textDecoration: "underline" }}>
                Back to Store
            </Link>
        </div>
    );
}

export default CheckoutSuccessPage;
