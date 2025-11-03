import React from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../../store/cartStore";

export default function Header() {
  const { cart } = useCartStore();

  // Calculate total quantity
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "#f8f8f8",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <h2>🛍️ Snežana React Store</h2>
      </Link>

      <nav style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          Home
        </Link>
        <Link to="/contact" style={{ textDecoration: "none", color: "black" }}>
          Contact
        </Link>
        <Link
          to="/cart"
          style={{
            textDecoration: "none",
            color: "black",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: "0.3rem",
          }}
        >
          🛒 Cart
          {totalItems > 0 && (
            <span
              style={{
                backgroundColor: "#ff5a5f",
                color: "white",
                borderRadius: "50%",
                width: "22px",
                height: "22px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.8rem",
              }}
            >
              {totalItems}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}
