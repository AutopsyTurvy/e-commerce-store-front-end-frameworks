

// AllProductsPage.js


import React from "react";

function AllProductsPage({ products }) {
    return (
        <div>
            <h1>All Products</h1>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
                {products.map((item) => (
                    <div key={item.id} style={{ border: "1px solid #ccc", padding: "1rem" }}>
                        <img src={item.image.url} alt={item.image.alt} style={{ width: "100%" }} />
                        <h2>{item.title}</h2>
                        <p>${item.price.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AllProductsPage;
