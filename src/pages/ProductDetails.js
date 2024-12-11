


// ProductDetails.js


import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchProduct() {
            try {
                const response = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch product details");
                }
                const data = await response.json();
                setProduct(data.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchProduct();
    }, [id]);

    if (loading) return <p>Loading product details...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>{product.title}</h1>
            <img src={product.image.url} alt={product.image.alt} style={{ width: "100%" }} />
            <p>{product.description}</p>
            <p>Price: ${product.discountedPrice.toFixed(2)}</p>
            <p>Rating: {product.rating}</p>
        </div>
    );
}

export default ProductDetails;






