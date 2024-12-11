




// DiscountedItemsPage.js



import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function DiscountedItemsPage({ products }) {
    const [discountedProducts, setDiscountedProducts] = useState([]);

    useEffect(() => {
        const filtered = products.filter(product => product.discountedPrice < product.price);
        setDiscountedProducts(filtered);
    }, [products]);

    if (!discountedProducts || discountedProducts.length === 0) {
        return <p>No discounted items available.</p>;
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
                        <p>
                            <strong>${item.discountedPrice.toFixed(2)}</strong>{" "}
                            <span style={{ textDecoration: "line-through", color: "red" }}>
                                ${item.price.toFixed(2)}
                            </span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DiscountedItemsPage;



