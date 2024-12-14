





// Product.js



import React from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.css";

function Product({ id, title, image, price, discountedPrice, tags }) {
    return (
        <div className={styles.productCard}>
            <img
                src={image.url}
                alt={image.alt}
                className={styles.productImage}
            />
            <h2 className={styles.productTitle}>{title}</h2>
            <p className={styles.productPrice}>
                {discountedPrice < price && (
                    <span className={styles.originalPrice}>
                        ${price.toFixed(2)}
                    </span>
                )}
                <span className={styles.discountedPrice}>
                    ${discountedPrice.toFixed(2)}
                </span>
            </p>
            {tags && (
                <div className={styles.tagsContainer}>
                    {tags.map((tag, index) => (
                        <span key={index} className={styles.tag}>
                            {tag}
                        </span>
                    ))}
                </div>
            )}
            <Link to={`/product/${id}`} className={styles.viewProductButton}>
                View Product
            </Link>
        </div>
    );
}

export default Product;
