




// HighestRatedItemsPage.js



import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
            <h1>Highest Rated Items</h1>
            <input
                type="text"
                placeholder="Search highest-rated products via titles and tags..."
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
                            <img
                                src={item.image.url}
                                alt={item.image.alt}
                                style={{ width: "100%" }}
                            />
                            <h2>{item.title}</h2>
                        </Link>
                        <p>Rating: {item.rating}</p>
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

export default HighestRatedItemsPage;



