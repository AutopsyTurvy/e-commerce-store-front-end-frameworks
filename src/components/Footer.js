import React from "react";
import "./Footer.css";


function Footer() {
    const currentYear = new Date().getFullYear(); 

    return (
        <footer className="footer">
            <div className="footer-container">
                <p className="footer-text">© {currentYear} MyShop. All rights reserved.</p>
                <ul className="footer-social-links">
                    <li>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            Facebook
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            Twitter
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            Instagram
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;