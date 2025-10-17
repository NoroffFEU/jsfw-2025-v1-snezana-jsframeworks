import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      style={{
        backgroundColor: "#f5f5f5",
        padding: "15px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>🛍️ Snežana Store</h2>

      <nav>
        <Link to="/" style={{ marginRight: "15px" }}>
          Home
        </Link>
        <Link to="/contact" style={{ marginRight: "15px" }}>
          Contact
        </Link>
        <Link to="/cart">Cart 🛒</Link>
      </nav>
    </header>
  );
}

export default Header;
