




// DiscountedItemsPage.js


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProductGrid.css";

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
            <h1 className="page-header">Discounted Items</h1>
            <input
                type="text"
                className="search-bar"
                placeholder="Search discounted products by title or tag..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="products-grid">
                {filteredProducts.map((item) => (
                    <div key={item.id} className="product-card">
                        <Link to={`/product/${item.id}`}>
                            <img
                                src={item.image.url}
                                alt={item.image.alt}
                                className="product-image"
                            />
                            <h2>{item.title}</h2>
                        </Link>
                        <p>
                            <strong>${item.discountedPrice.toFixed(2)}</strong>{" "}
                            <span style={{ textDecoration: "line-through", color: "red" }}>
                                ${item.price.toFixed(2)}
                            </span>
                        </p>
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
            </div>
        </div>
    );
}

export default DiscountedItemsPage;






