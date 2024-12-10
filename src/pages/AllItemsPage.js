import React from "react";

function AllItemsPage({ products = [] }) {
    if (!products || products.length === 0) {
        return <p>Loading all items...</p>;
    }

    return (
        <div>
            <h1>All Items</h1>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
                {products.map((item) => (
                    <div key={item.id} style={{ border: "1px solid #ccc", padding: "1rem" }}>
                        <img src={item.image.url} alt={item.image.alt} style={{ width: "100%" }} />
                        <h2>{item.title}</h2>
                        <p>${item.discountedPrice.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AllItemsPage;
