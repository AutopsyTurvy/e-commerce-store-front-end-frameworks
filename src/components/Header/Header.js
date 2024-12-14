



// Header.js




import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import logoImage from "../../assets/shopping-cart-bird.png"; 
import "../HamburgerMenu/HamburgerMenu.css"; 
import "./Header.css"; 


function Header({ cartCount }) {
    const [isNavVisible, setIsNavVisible] = useState(false);

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    return (
        <header className="header">
            <div className="logo">
                <a href="/" aria-label="Home">
                    <img src={logoImage} alt="BidNest logo" className="logo-image" />
                </a>
                <h1>
                    <NavLink to="/" className="site-title">
                        BidNest
                    </NavLink>
                </h1>
            </div>

            <div className="hamburger" onClick={toggleNav}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <nav>
                <ul className={`nav-list ${isNavVisible ? "show" : ""}`}>
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
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart" className={({ isActive }) => (isActive ? "active" : "")}>
                            <div className="cart-icon-container">
                                <FontAwesomeIcon icon={faCartShopping} />
                                {cartCount > 0 && <span className="cart-count">({cartCount})</span>}
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;







