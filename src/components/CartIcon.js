



// CartIcon.js


import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./CartIcon.css"; 

function CartIcon({ cartCount }) {
    return (
        <div className="cart-icon">
            <Link to="/checkout">
                <FontAwesomeIcon icon={faCartShopping} style={{ fontSize: "1.5rem", color: "#fff" }} />
                {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </Link>
        </div>
    );
}

export default CartIcon;
