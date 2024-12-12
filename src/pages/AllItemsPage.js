





// AllItemsPage.js



import React, { useState } from "react";
import { Link } from "react-router-dom";

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
            <h1>All Items</h1>
            <input
                type="text"
                placeholder="Search by title or tag..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                    width: "100%",
                    padding: "0.5rem",
                    marginBottom: "1rem",
                    fontSize: "1rem",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                }}
            />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "1rem" }}>
                {filteredProducts.map((item) => (
                    <div key={item.id} style={{ border: "1px solid #ccc", padding: "1rem" }}>
                        <Link to={`/product/${item.id}`}>
                            <img src={item.image.url} alt={item.image.alt} style={{ width: "100%" }} />
                            <h2>{item.title}</h2>
                            <p>${item.discountedPrice.toFixed(2)}</p>
                        </Link>
                        {item.tags && item.tags.length > 0 && (
                            <div style={{ marginTop: "0.5rem" }}>
                                <strong>Tags:</strong>{" "}
                                {item.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        style={{
                                            display: "inline-block",
                                            backgroundColor: "#f1f1f1",
                                            color: "#333",
                                            fontSize: "0.9rem",
                                            padding: "0.2rem 0.5rem",
                                            marginRight: "0.3rem",
                                            borderRadius: "3px",
                                        }}
                                    >
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


