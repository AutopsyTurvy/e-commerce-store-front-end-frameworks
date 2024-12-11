


// HighestRatedItemsPage.js


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HighestRatedItemsPage({ products }) {
    const [highestRatedItems, setHighestRatedItems] = useState([]);

    useEffect(() => {
        const filteredAndSorted = products
            .filter((product) => product.rating >= 4)
            .sort((a, b) => b.rating - a.rating);
        setHighestRatedItems(filteredAndSorted);
    }, [products]);

    if (!highestRatedItems || highestRatedItems.length === 0) {
        return <p>No highest-rated items available.</p>;
    }

    return (
        <div>
            <h1>Highest Rated Items</h1>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
                {highestRatedItems.map((item) => (
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
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HighestRatedItemsPage;
