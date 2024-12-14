




// DiscountedItemsPage.js


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./ProductGrid.module.css";

function DiscountedItemsPage({ products }) {
    const [discountedProducts, setDiscountedProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const filtered = products.filter((product) => product.discountedPrice < product.price);
        setDiscountedProducts(filtered);
    }, [products]);

    const filteredProducts = discountedProducts.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (product.tags && product.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())))
    );

    if (!discountedProducts || discountedProducts.length === 0) {
        return <p>No discounted items available.</p>;
    }

    return (
        <div>
            <h1 className={styles.pageHeader}>Discounted Items</h1>
            <input
                type="text"
                className={styles.searchBar}
                placeholder="Search discounted products by title or tag..."
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
                        <p>
                            <span className={styles.newPrice}>
                                ${item.discountedPrice.toFixed(2)}
                                </span>{" "}
                                <span className={styles.oldPrice}>
                                    ${item.price.toFixed(2)}
                                    </span>
                                    </p>

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

export default DiscountedItemsPage;






