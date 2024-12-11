import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <i className="fa-solid fa-gavel" style={{ marginRight: "0.5rem", color: "#fff", fontSize: "1.5rem" }}></i>
                <NavLink to="/">MyShop</NavLink>
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
        </header>
    );
}

export default Header;
