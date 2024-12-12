




// Footer.js



import React from "react";
import "./Footer.css";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <p className="footer-text">© {currentYear} BidNest. Shop for your haven.</p>
                <ul className="footer-social-links">
                    <a href="/" className="footer-icon">
                        <i className="fa-solid fa-house"></i>
                    </a>

                    <a href="/contact" className="footer-icon">
                        <i className="fa-regular fa-envelope"></i>
                    </a>

                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-icon"
                    >
                        <i className="fa-brands fa-facebook"></i>
                    </a>

                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-icon"
                    >
                        <i className="fa-brands fa-twitter"></i>
                    </a>

                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-icon"
                    >
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
