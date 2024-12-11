import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"; 
import logoImage from "../assets/shopping-cart-bird.png";
import "./Header.css";

function Header({ cartCount }) {
    return (
        <header className="header">
            <div className="logo">
           
                <img src={logoImage} alt="Logo" className="logo-image" />

               
                <h1>
                    <NavLink to="/" className="site-title">
                        BidNest
                    </NavLink>
                </h1>
            </div>
            <nav>
                <ul className="nav-list">
                    <li>
                        <NavLink to="/all-items" className={({ isActive }) => (isActive ? "active" : "")}>
                            All Items
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/discounted-items" className={({ isActive }) => (isActive ? "active" : "")}>
                            Discounted Items
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/highest-rated-items" className={({ isActive }) => (isActive ? "active" : "")}>
                            Highest Rated
                        </NavLink>
                    </li>
                </ul>
            </nav>

          
            <div className="cart-icon">
                <FontAwesomeIcon icon={faCartShopping} style={{ fontSize: "1.5rem", color: "#fff", marginRight: "0.5rem" }} />
                {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </div>
        </header>
    );
}

export default Header;


