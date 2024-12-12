




// App.js



import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ProductsPage from "./pages/ProductsPage";
import DiscountedItemsPage from "./pages/DiscountedItemsPage";
import HighestRatedItemsPage from "./pages/HighestRatedItemsPage";
import AllItemsPage from "./pages/AllItemsPage";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";

function App() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

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

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const isInCart = prevCart.some((item) => item.id === product.id);
            if (!isInCart) {
                return [...prevCart, product];
            }
            return prevCart;
        });
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    return (
        <Router>
            <Layout cartCount={cart.length}>
                <Routes>
                    <Route path="/" element={<ProductsPage products={products} />} />
                    <Route path="/discounted-items" element={<DiscountedItemsPage products={products} />} />
                    <Route path="/highest-rated-items" element={<HighestRatedItemsPage products={products} />} />
                    <Route path="/all-items" element={<AllItemsPage products={products} />} />
                    <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} />} />
                    <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;







