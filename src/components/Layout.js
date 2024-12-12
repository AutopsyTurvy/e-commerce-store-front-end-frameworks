


// Layout.js


import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ cartCount, children }) {
    return (
        <>
            <Header cartCount={cartCount} />
            <main>{children}</main>
            <Footer />
        </>
    );
}

export default Layout;