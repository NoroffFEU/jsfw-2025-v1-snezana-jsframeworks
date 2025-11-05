import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCartStore } from "../../store/cartStore";
import "./Header.css";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const cart = useCartStore((state) => state.cart);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${searchQuery.trim()}`);
      setSearchQuery("");
    }
  };

  return (
    <header className="site-header">
      <div className="header-container">
        {/* Brand */}
        <Link to="/" className="brand">
          🛍 Snezana Store
        </Link>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="search-bar">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">🔍</button>
        </form>

        {/* Navigation */}
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart" className="cart-btn">
            <span>🛒</span>
            <span className="cart-count">{cart.length}</span>
          </Link>
          <Link to="/checkout-success" className="checkout-link">
            Checkout
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
