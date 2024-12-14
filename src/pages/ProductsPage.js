




// ProductsPage.js (Current Landing/ Home Page)



import React, { useState, useEffect } from "react";
import Product from "../components/Product/Product";
import { Link } from "react-router-dom";
import styles from "./ProductsPage.module.css";

function ProductsPage({ products = [] }) {
    const [allProducts, setAllProducts] = useState([]);
    const [visibleProductsCount, setVisibleProductsCount] = useState(10);
    const [searchTerm, setSearchTerm] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        setAllProducts(products);
    }, [products]);

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

    const randomDiscountedProduct = shuffledProducts.find(
        (product) => product.discountedPrice < product.price
    );
    const randomHighestRatedProduct = shuffledProducts.find(
        (product) =>
            product.rating >= 4 && product.id !== randomDiscountedProduct?.id
    );

    const filteredProducts = allProducts
        .filter(
            (product) =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (product.tags &&
                    product.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())))
        )
        .slice(0, visibleProductsCount);

    const handleSearchChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);

        if (term) {
            const matchedSuggestions = products
                .filter(
                    (product) =>
                        product.title.toLowerCase().includes(term.toLowerCase()) ||
                        (product.tags &&
                            product.tags.some((tag) => tag.toLowerCase().includes(term.toLowerCase())))
                )
                .slice(0, 5);
            setSuggestions(matchedSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const handleSeeMore = () => {
        setVisibleProductsCount((prevCount) => prevCount + 10);
    };

    const handleSeeLess = () => {
        setVisibleProductsCount((prevCount) => Math.max(prevCount - 10, 10));
    };

    return (
        <div className={styles.mainPageContainer}>
       
            <div className={styles.productsContainer}>
                <div className={`${styles.section} ${styles.discountedSection}`}>
                    <Link to="/discounted-items">
                        <img
                            src={randomDiscountedProduct?.image?.url || "default-image.jpg"}
                            alt={randomDiscountedProduct?.image?.alt || "Discounted Items"}
                            className={styles.randomProductImage}
                        />
                        <div className={styles.sectionTitle}>Discounted Items</div>
                    </Link>
                </div>

                <div className={`${styles.section} ${styles.discountedSection}`}>
                    <Link to="/highest-rated-items">
                        <img
                            src={randomHighestRatedProduct?.image?.url || "default-image.jpg"}
                            alt={randomHighestRatedProduct?.image?.alt || "Highest Rated Items"}
                            className={styles.randomProductImage}
                        />
                        <div className={styles.sectionTitle}>Highest Rated Items</div>
                    </Link>
                </div>
            </div>

          
            <hr className={styles.sectionSeparator} />

            
            <div className={styles.mainSearchBar}>
                <input
                    type="text"
                    placeholder="Search products by title or tag..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className={styles.searchInput}
                />
                {suggestions.length > 0 && (
                    <ul className={styles.suggestionsDropdown}>
                        {suggestions.map((item) => (
                            <li key={item.id} className={styles.suggestionItem}>
                                <Link to={`/product/${item.id}`}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

          
            <section className={styles.productsGrid}>
                {filteredProducts.map((product) => (
                    <Product
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        image={product.image}
                        price={product.price}
                        discountedPrice={product.discountedPrice}
                        tags={product.tags}
                    />
                ))}
            </section>

          
            <div className={styles.buttonContainer}>
                {filteredProducts.length < allProducts.length && (
                    <button onClick={handleSeeMore} className={styles.seeMoreButton}>
                        See More
                    </button>
                )}
                {visibleProductsCount > 10 && (
                    <button onClick={handleSeeLess} className={styles.seeLessButton}>
                        See Less
                    </button>
                )}
            </div>
        </div>
    );
}

export default ProductsPage;
