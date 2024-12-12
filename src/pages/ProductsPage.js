




// ProductsPage.js (Current Landing/ Home Page)


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProductsPage.css";

function ProductsPage({ products = [] }) {
    const [allProducts, setAllProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        setAllProducts(products); 
    }, [products]);

    const shuffleArray = (array) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    if (!products || products.length === 0) {
        return <p>Loading products...</p>;
    }

    const shuffledProducts = shuffleArray(products);

    const randomDiscountedProduct = shuffledProducts.find((product) => product.discountedPrice < product.price);
    const randomHighestRatedProduct = shuffledProducts.find(
        (product) => product.rating >= 4 && product.id !== randomDiscountedProduct?.id
    );

    const filteredProducts = allProducts.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.tags && item.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())))
    );

    return (
        <div className="main-page-container">
            <div className="products-container">
                <div className="section discounted-section">
                    <Link to="/discounted-items">
                        <img
                            src={randomDiscountedProduct?.image?.url || "default-image.jpg"}
                            alt={randomDiscountedProduct?.image?.alt || "Discounted Items"}
                            className="random-product-image"
                        />
                        <div className="section-title">Discounted Items</div>
                    </Link>
                </div>
    
                <div className="section discounted-section">
                    <Link to="/highest-rated-items">
                        <img
                            src={randomHighestRatedProduct?.image?.url || "default-image.jpg"}
                            alt={randomHighestRatedProduct?.image?.alt || "Highest Rated Items"}
                            className="random-product-image"
                        />
                        <div className="section-title">Highest Rated Items</div>
                    </Link>
                </div>
            </div>
    
            {/* Add separator here */}
            <hr className="section-separator" />
    
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search products by title or tag..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                        width: "40%",
                        padding: "0.5rem",
                        marginBottom: "1rem",
                        marginLeft: "4em",
                        fontSize: "1rem",
                        border: "2px solid #333",
                        borderRadius: "4px",
                    }}
                />
            </div>
    
            <section className="products-grid">
                {filteredProducts.map((item) => (
                    <div key={item.id} className="product-card">
                        <Link to={`/product/${item.id}`}>
                            <img
                                src={item.image.url}
                                alt={item.image.alt}
                                className="product-image"
                            />
                            <h2>{item.title}</h2>
                            <p>
                                {item.discountedPrice < item.price && (
                                    <span style={{ textDecoration: "line-through", color: "red", marginRight: "0.5rem" }}>
                                        ${item.price.toFixed(2)}
                                        </span>
                                    )}
                                    <strong>${item.discountedPrice.toFixed(2)}</strong>
                                    </p>
                        </Link>
                        {item.tags && (
                            <div className="tags-container">
                                {item.tags.map((tag, index) => (
                                    <span key={index} className="tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </section>
        </div>
    );
}

export default ProductsPage;

