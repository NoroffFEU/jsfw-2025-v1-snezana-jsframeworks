import React from "react";
import { useCartStore } from "../../store/cartStore";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCartStore();

  const totalPrice = cart.reduce(
    (total, item) => total + item.discountedPrice * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "4rem" }}>
        <h2>Your cart is empty 🛒</h2>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            backgroundColor: "#007bff",
            color: "white",
            padding: "0.5rem 1rem",
            borderRadius: "6px",
          }}
        >
          Go back to shopping
        </Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "900px", margin: "2rem auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>🛍️ Your Cart</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1rem",
            padding: "1rem",
            border: "1px solid #ddd",
            borderRadius: "8px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <img
              src={item.image?.url}
              alt={item.title}
              width="80"
              style={{ borderRadius: "6px" }}
            />
            <div>
              <h3>{item.title}</h3>
              <p>Price: ${item.discountedPrice.toFixed(2)}</p>
              <p>Qty: {item.quantity}</p>
            </div>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            style={{
              backgroundColor: "#dc3545",
              color: "white",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Remove
          </button>
        </div>
      ))}

      <div
        style={{
          textAlign: "right",
          marginTop: "2rem",
          fontSize: "1.2rem",
          fontWeight: "bold",
        }}
      >
        Total: ${totalPrice.toFixed(2)}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "1.5rem",
        }}
      >
        <button
          onClick={clearCart}
          style={{
            backgroundColor: "#6c757d",
            color: "white",
            border: "none",
            padding: "0.5rem 1rem",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Clear Cart
        </button>

        <Link
          to="/checkout-success"
          style={{
            backgroundColor: "#28a745",
            color: "white",
            padding: "0.5rem 1rem",
            borderRadius: "6px",
            textDecoration: "none",
          }}
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}