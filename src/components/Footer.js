import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear(); 

    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                <p style={styles.text}>© {currentYear} MyShop. All rights reserved.</p>
                <ul style={styles.socialLinks}>
                    <li>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.link}>
                            Facebook
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.link}>
                            Twitter
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.link}>
                            Instagram
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

const styles = {
    footer: {
        backgroundColor: "#333",
        color: "#fff",
        padding: "1rem 0",
        position: "relative",
        bottom: 0,
        width: "100%",
        textAlign: "center",
    },
    container: {
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    text: {
        margin: "0.5rem 0",
    },
    socialLinks: {
        listStyle: "none",
        display: "flex",
        gap: "1rem",
        margin: 0,
        padding: 0,
    },
    link: {
        color: "#fff",
        textDecoration: "none",
    },
};

export default Footer;
