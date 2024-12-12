



// CartIcon.js


import React, { useState } from "react";
import CartIcon from "./CartIcon";
import CartPage from "./CartPage";

function App() {
    const [cart, setCart] = useState([]); 

   
    const addToCart = (item) => {
        setCart((prevCart) => [...prevCart, item]);
    };

   
    const cartCount = cart.length;

    return (
        <div>
            <CartIcon cartCount={cartCount} />
            <CartPage cart={cart} />
        </div>
    );
}

export default App;

