





// AllItemsPage.js



import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProductGrid.css";

function AllItemsPage({ products = [] }) {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredProducts = products.filter((product) => {
        const searchTermLower = searchTerm.toLowerCase();
        return (
            product.title.toLowerCase().includes(searchTermLower) ||
            (product.tags && product.tags.some((tag) => tag.toLowerCase().includes(searchTermLower)))
        );
    });

    if (!products || products.length === 0) {
        return <p>Loading all items...</p>;
    }

    return (
        <div>
            <h1 className="page-header">All Items</h1>
            <input
                type="text"
                className="search-bar"
                placeholder="Search by title or tag..."
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
                            <p>${item.discountedPrice.toFixed(2)}</p>
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
            </div>
        </div>
    );
}

export default AllItemsPage;



