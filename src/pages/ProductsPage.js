


// ProductsPage.js (Current Landing/ Home Page)

import React from "react";
import { Link } from "react-router-dom";
import "./ProductsPage.css";

function ProductsPage({ products }) {
   
    const shuffleArray = (array) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    if (!products || products.length === 0) {
        return <p>Loading products...</p>;
    }

 
    const shuffledProducts = shuffleArray(products);

    const randomDiscountedProduct = shuffledProducts.find((product) => product.discountedPrice < product.price);
    const randomHighestRatedProduct = shuffledProducts.find(
        (product) => product.rating >= 4 && product.id !== randomDiscountedProduct?.id
    );
    const randomAllProduct = shuffledProducts.find(
        (product) => product.id !== randomDiscountedProduct?.id && product.id !== randomHighestRatedProduct?.id
    );

    console.log("Random Discounted Product:", randomDiscountedProduct);
    console.log("Random Highest Rated Product:", randomHighestRatedProduct);
    console.log("Random All Product:", randomAllProduct);

    return (
        <div className="main-page-container">
            <div className="products-container">
              
                <div className="section discounted-section">
                    <Link to="/discounted-items">
                        <img
                            src={randomDiscountedProduct?.image?.url || "default-image.jpg"}
                            alt={randomDiscountedProduct?.image?.alt || "Discounted Items"}
                            className="random-product-image"
                        />
                        <div className="section-title">Discounted Items</div>
                    </Link>
                </div>

                <div className="section">
                    <Link to="/highest-rated-items">
                        <img
                            src={randomHighestRatedProduct?.image?.url || "default-image.jpg"}
                            alt={randomHighestRatedProduct?.image?.alt || "Highest Rated Items"}
                            className="random-product-image"
                        />
                        <div className="section-title">Highest Rated Items</div>
                    </Link>
                </div>

               
                <div className="section">
                    <Link to="/all-items">
                        <img
                            src={randomAllProduct?.image?.url || "default-image.jpg"}
                            alt={randomAllProduct?.image?.alt || "Browse All Items"}
                            className="random-product-image"
                        />
                        <div className="section-title">Browse All Items</div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProductsPage;

