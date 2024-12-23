




// HighestRatedItemsPage.js



import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./ProductGrid.module.css";

function HighestRatedItemsPage({ products }) {
    const [highestRatedItems, setHighestRatedItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const filteredAndSorted = products
            .filter((product) => product.rating >= 4)
            .sort((a, b) => b.rating - a.rating);
        setHighestRatedItems(filteredAndSorted);
    }, [products]);

    const filteredProducts = highestRatedItems.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (product.tags && product.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())))
    );

    if (!highestRatedItems || highestRatedItems.length === 0) {
        return <p>No highest-rated items available.</p>;
    }

    return (
        <div>
            <h1 className={styles.pageHeader}>Highest Rated Items</h1>
            <input
                type="text"
                className={styles.searchBar}
                placeholder="Search highest-rated products by title or tag..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className={styles.productsGrid}>
                {filteredProducts.map((item) => (
                    <div key={item.id} className={styles.productCard}>
                        <Link to={`/product/${item.id}`}>
                            <img
                                src={item.image.url}
                                alt={item.image.alt}
                                className={styles.productImage}
                            />
                            <h2>{item.title}</h2>
                        </Link>
                        <p>Rating: {item.rating}</p>
                        {item.tags && (
                            <div className={styles.tagsContainer}>
                                {item.tags.map((tag, index) => (
                                    <span key={index} className={styles.tag}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HighestRatedItemsPage;



