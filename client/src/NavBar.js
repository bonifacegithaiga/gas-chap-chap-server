import React from "react";
import { Link } from "@reach/router";
import "./App.css";

function NavBar() {
    return (
        <div className="gcc-container">
            <nav className="gcc-nav">
                <span className="gcc-title">Gas Chap Chap</span>
                <link to="/" ></link>
                <Link to="/">Home</Link>
                <Link to="/customer">Customer</Link>
                <Link to="/order">Order</Link>
                <Link to="/admin">Admin</Link>

            </nav>
        </div>
    );
}

export default NavBar;