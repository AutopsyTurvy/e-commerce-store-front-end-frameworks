


// ProductDetails.js



import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

function ProductDetails({ addToCart }) {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchProduct() {
            try {
                const response = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch product details");
                }
                const data = await response.json();
                setProduct(data.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchProduct();
    }, [id]);

    if (loading) return <p className="loading-message">Loading product details...</p>;
    if (error) return <p className="error-message">Error: {error}</p>;

    const calculateDiscount = () => {
        if (product.price > product.discountedPrice) {
            const discount = ((product.price - product.discountedPrice) / product.price) * 100;
            return `${discount.toFixed(2)}% off`;
        }
        return null;
    };

    const calculateSavings = () => {
        if (product.price > product.discountedPrice) {
            const savings = product.price - product.discountedPrice;
            return savings.toFixed(2); 
        }
        return null;
    };

    return (
        <div className="product-details-container">
            <div className="product-image-container">
                <img
                    src={product.image.url}
                    alt={product.image.alt}
                    className="product-details-image"
                />
            </div>
            <div className="product-info-container">
                <h1 className="product-title">{product.title}</h1>
                <p className="product-description">{product.description}</p>
                <p className="product-original-price">
                    Original Price: <span>${product.price.toFixed(2)}</span>
                </p>
                <p className="product-price">
                    Discounted Price: <strong>${product.discountedPrice.toFixed(2)}</strong>
                </p>
                {product.price > product.discountedPrice && (
                    <>
                        <p className="product-savings">
                            Discount of: <strong>${calculateSavings()}</strong>
                        </p>
                        <p className="product-discount"> {calculateDiscount()}</p>
                    </>
                )}
                <button className="add-to-cart-button" onClick={() => addToCart(product)}>
                    Add to Cart
                </button>
            </div>
            {product.reviews && product.reviews.length > 0 ? (
                <div className="product-reviews-container">
                    <h2>Reviews</h2>
                    <ul>
                        {product.reviews.map((review) => (
                            <li key={review.id}>
                                <p>
                                    <strong>{review.username.replace(/\.$/, "")}</strong>:{" "}
                                    {review.description}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>No reviews available for this product.</p>
            )}
        </div>
    );
}

export default ProductDetails;

