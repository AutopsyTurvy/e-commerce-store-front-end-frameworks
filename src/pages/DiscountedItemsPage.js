


// DiscountedItemsPage.js


import React from "react";

function DiscountedItemsPage({ products = [] }) {
    // This section folters all of the discounted items and displays only them
    const discountedItems = products.filter(
        (product) => product.discountedPrice < product.price
    );

    // error handling
    if (!discountedItems.length) {
        return <p>No discounted items available at this time.</p>;
    }

    return (
        <div>
            <h1>Discounted Items:</h1>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
                {discountedItems.map((item) => (
                    <div key={item.id} style={{ border: "1px solid #ccc", padding: "1rem" }}>
                       
                        <img src={item.image.url} alt={item.image.alt} style={{ width: "100%" }} />
                     
                        <h2>{item.title}</h2>
        
                        <p>
                            <strong>Discounted Price: ${item.discountedPrice.toFixed(2)}</strong>
                        </p>
                        {item.discountedPrice < item.price && (
                            <p style={{ textDecoration: "line-through", color: "red" }}>
                                Original Price: ${item.price.toFixed(2)}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DiscountedItemsPage;


