


// ProductsPage.js (Current Landing/ Home Page)

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

   
    const shuffleArray = (array) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

 
    const shuffledProducts = shuffleArray(products);

   
    const randomDiscountedProduct = shuffledProducts.find(product => product.discountedPrice < product.price);
    const randomHighestRatedProduct = shuffledProducts.find(
        product => product.rating >= 4 && product.id !== randomDiscountedProduct?.id
    );
    const randomAllProduct = shuffledProducts.find(
        product => product.id !== randomDiscountedProduct?.id && product.id !== randomHighestRatedProduct?.id
    );

  
    console.log("Random Discounted Product:", randomDiscountedProduct);
    console.log("Random Highest Rated Product:", randomHighestRatedProduct);
    console.log("Random All Product:", randomAllProduct);

    return (
        <div>
            <h1>Welcome to BidNest!</h1>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "1rem" }}>
       
                <div style={{ position: "relative" }}>
                    <Link to="/discounted-items">
                        <img
                            src={randomDiscountedProduct?.image?.url || "default-image.jpg"}
                            alt={randomDiscountedProduct?.image?.alt || "Discounted Items"}
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

               
                <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: "1rem" }}>
                    
                    <div style={{ position: "relative" }}>
                        <Link to="/highest-rated-items">
                            <img
                                src={randomHighestRatedProduct?.image?.url || "default-image.jpg"}
                                alt={randomHighestRatedProduct?.image?.alt || "Highest Rated Items"}
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

               
                    <div style={{ position: "relative" }}>
                        <Link to="/all-items">
                            <img
                                src={randomAllProduct?.image?.url || "default-image.jpg"}
                                alt={randomAllProduct?.image?.alt || "Browse All Items"}
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
