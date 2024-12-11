


// DiscountedItemsPage.js


import React from "react";
import { Link } from "react-router-dom";

function DiscountedItemsPage({ products }) {
    const discountedProducts = products.filter(
        (product) => product.discountedPrice < product.price
    );

    if (!discountedProducts || discountedProducts.length === 0) {
        return <p>No discounted items available. Our apologies! Please check again another time.</p>;
    }

    return (
        <div>
            <h1>Discounted Items</h1>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
                {discountedProducts.map((item) => (
                    <div key={item.id} style={{ border: "1px solid #ccc", padding: "1rem" }}>
                        <Link to={`/product/${item.id}`}>
                            <img
                                src={item.image.url}
                                alt={item.image.alt}
                                style={{ width: "100%" }}
                            />
                            <h2>{item.title}</h2>
                        </Link>
                        <p>${item.discountedPrice.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DiscountedItemsPage;



