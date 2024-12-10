import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import DiscountedItemsPage from "./pages/DiscountedItemsPage";
import HighestRatedItemsPage from "./pages/HighestRatedItemsPage";
import AllItemsPage from "./pages/AllItemsPage";
import ProductDetails from "./pages/ProductDetails";

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch("https://v2.api.noroff.dev/online-shop");
                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }
                const data = await response.json();
                setProducts(data.data);
            } catch (err) {
                console.error("Failed to fetch products:", err);
            }
        }

        fetchProducts();
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<ProductsPage products={products} />} />
                <Route
                    path="/discounted-items"
                    element={<DiscountedItemsPage products={products} />}
                />
                <Route
                    path="/highest-rated-items"
                    element={<HighestRatedItemsPage products={products} />}
                />
                <Route path="/all-items" element={<AllItemsPage products={products} />} />
                <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
        </Router>
    );
}

export default App;
