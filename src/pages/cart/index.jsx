import React from "react";
import { useCartStore } from "../../store/cartStore";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart, clearCart, getCartCount } = useCartStore();

  console.log("🛒 Cart content:", cart);

  // Total price calculation
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.quantity * (item.discountedPrice || item.price),
    0
  );

  // Empty cart
  if (!cart || cart.length === 0) {
    return (
      <div style={{ padding: "2rem" }}>
        <h1>Your Cart is Empty 🛍️</h1>
        <Link to="/">Go back to the store</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Your Cart ({getCartCount()} items)</h1>

      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "1rem",
            borderBottom: "1px solid #ddd",
            paddingBottom: "1rem",
          }}
        >
          {item.image && item.image.url && (
            <img
              src={item.image.url}
              alt={item.title}
              width="100"
              style={{ borderRadius: "8px" }}
            />
          )}

          <div>
            <h3>{item.title}</h3>
            <p>Quantity: {item.quantity}</p>
            <p>
              Price:{" "}
              {((item.discountedPrice || item.price) * item.quantity).toFixed(2)}{" "}
              NOK
            </p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        </div>
      ))}

      <h2>Total: {totalPrice.toFixed(2)} NOK</h2>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
}

export default Cart;
