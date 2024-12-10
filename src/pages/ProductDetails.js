import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
    const { id } = useParams(); // NOTE- This gets the product ID from the URL-- in theory XD
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
            <p>
                Price: <strong>${product.discountedPrice.toFixed(2)}</strong>{" "}
                {product.discountedPrice < product.price && (
                    <span style={{ textDecoration: "line-through", color: "red" }}>
                        ${product.price.toFixed(2)}
                    </span>
                )}
            </p>
            <p>Rating: {product.rating}</p>
            <h2>Reviews</h2>
            {product.reviews.length > 0 ? (
                <ul>
                    {product.reviews.map((review) => (
                        <li key={review.id}>
                            <strong>{review.username}:</strong> {review.description} (
                            {review.rating}/5)
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No reviews yet.</p>
            )}
        </div>
    );
}

export default ProductDetails;
