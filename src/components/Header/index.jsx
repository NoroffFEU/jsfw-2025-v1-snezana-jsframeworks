import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCartStore } from "../../store/cartStore";
import "./Header.css";

export default function Header() {
  // ✅ Always call hook unconditionally
  const cartItems = useCartStore((state) => state.items) || [];
  const itemCount = Array.isArray(cartItems) ? cartItems.length : 0;

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <nav className="nav">
        {/* 🛍️ Logo */}
        <Link to="/" className="logo" onClick={closeMenu}>
          🛍️ Snežana Store
        </Link>

        {/* 🍔 Mobile Menu Button */}
        <div className="menu-toggle" onClick={toggleMenu}>
          <span className={menuOpen ? "bar open" : "bar"}></span>
          <span className={menuOpen ? "bar open" : "bar"}></span>
          <span className={menuOpen ? "bar open" : "bar"}></span>
        </div>

        {/* 🔗 Navigation Links */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/cart" onClick={closeMenu}>
            Cart
          </NavLink>
          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>

          {/* 🛒 Cart Icon */}
          <Link to="/cart" className="cart-icon" onClick={closeMenu}>
            🛒
            {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
          </Link>
        </div>
      </nav>
    </header>
  );
}