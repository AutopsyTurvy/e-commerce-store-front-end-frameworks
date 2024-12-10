


// ProductsPage.js

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch("https://v2.api.noroff.dev/online-shop");
                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }
                const data = await response.json();
                setProducts(data.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, []);

    if (loading) return <p>Loading products...</p>;
    if (error) return <p>Error: {error}</p>;

    const firstDiscountedItem = products.find(
        (product) => product.discountedPrice < product.price
    );

    const highestRatedItem = products.reduce((prev, current) =>
        current.rating > prev.rating ? current : prev
    );

    return (
        <div>
            <h1>Welcome to the Shop!</h1>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "1rem" }}>
                {/* Left section id for the discounted items--  */}
                <div style={{ position: "relative" }}>
                    <Link to="/discounted-items">
                        <img
                            src={firstDiscountedItem?.image.url || "default-image.jpg"}
                            alt={firstDiscountedItem?.image.alt || "Discounted Items"}
                            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                        />
                        <div
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                color: "white",
                                fontSize: "1.5rem",
                                fontWeight: "bold",
                                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
                                background: "rgba(0, 0, 0, 0.5)",
                                padding: "10px 20px",
                                borderRadius: "5px",
                            }}
                        >
                            Discounted Items
                        </div>
                    </Link>
                </div>

                {/* Right Section */}
                <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: "1rem" }}>
                    {/* Highest Rated Items */}
                    <div style={{ position: "relative" }}>
                        <Link to="/highest-rated-items">
                            <img
                                src={highestRatedItem?.image.url || "default-image.jpg"}
                                alt={highestRatedItem?.image.alt || "Highest Rated Items"}
                                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    color: "white",
                                    fontSize: "1.5rem",
                                    fontWeight: "bold",
                                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
                                    background: "rgba(0, 0, 0, 0.5)",
                                    padding: "10px 20px",
                                    borderRadius: "5px",
                                }}
                            >
                                Highest Rated Items
                            </div>
                        </Link>
                    </div>

                    {/* Browse All Items */}
                    <div style={{ position: "relative" }}>
                        <Link to="/all-items">
                            <img
                                src="path-to-browse-all-image.jpg"
                                alt="Browse All Items"
                                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    color: "white",
                                    fontSize: "1.5rem",
                                    fontWeight: "bold",
                                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
                                    background: "rgba(0, 0, 0, 0.5)",
                                    padding: "10px 20px",
                                    borderRadius: "5px",
                                }}
                            >
                                Browse All Items
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductsPage;
