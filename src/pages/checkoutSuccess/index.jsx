import React from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../../store/cartStore";

export default function CheckoutSuccess() {
  const { clearCart } = useCartStore();

  React.useEffect(() => {
    // Clear the cart automatically after checkout
    clearCart();
  }, [clearCart]);

  return (
    <div style={{ textAlign: "center", marginTop: "5rem" }}>
      <h1 style={{ color: "#28a745", marginBottom: "1rem" }}>🎉 Checkout Successful!</h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
        Thank you for your purchase! Your order has been placed successfully.
      </p>

      <img
        src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
        alt="Success"
        width="120"
        style={{ marginBottom: "2rem" }}
      />

      <div>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            backgroundColor: "#007bff",
            color: "white",
            padding: "0.7rem 1.5rem",
            borderRadius: "8px",
            fontSize: "1rem",
          }}
        >
          Continue Shopping 🛍️
        </Link>
      </div>
    </div>
  );
}