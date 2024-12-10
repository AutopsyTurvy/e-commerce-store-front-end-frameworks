import React from "react";

function HighestRatedItemsPage({ products }) {
    const highestRatedItems = products
        .filter((product) => product.rating >= 4)
        .sort((a, b) => b.rating - a.rating);

    return (
        <div>
            <h1>Highest Rated Items</h1>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
                {highestRatedItems.map((item) => (
                    <div key={item.id} style={{ border: "1px solid #ccc", padding: "1rem" }}>
                        <img src={item.image.url} alt={item.image.alt} style={{ width: "100%" }} />
                        <h2>{item.title}</h2>
                        <p>Rating: {item.rating}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HighestRatedItemsPage;
