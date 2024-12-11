



// Header.js


import React from "react";
import { NavLink } from "react-router-dom";
import logoImage from "../assets/shopping-cart-bird.png";
import CartIcon from "./CartIcon"; 
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
    
            <CartIcon cartCount={cartCount} />
        </header>
    );
}

export default Header;



