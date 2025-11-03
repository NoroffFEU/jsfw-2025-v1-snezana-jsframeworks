import React from "react";
import { useCartStore } from "../../store/cartStore";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart, clearCart } = useCartStore();

  const total = cart.reduce(
    (sum, item) => sum + item.discountedPrice * (item.quantity || 1),
    0
  );

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your cart is empty 🛒</h2>
        <Link to="/">Go back to shop</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Your Cart 🛍️</h1>

      <ul className="cart-items">
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <img
              src={item.image?.url || "/placeholder.png"}
              alt={item.title}
              className="cart-item-image"
            />
            <div className="cart-item-details">
              <h3>{item.title}</h3>
              <p>Price: {item.discountedPrice} NOK</p>
              <p>Quantity: {item.quantity || 1}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>

      <div className="cart-summary">
        <h2>Total: {total.toFixed(2)} NOK</h2>
        <button onClick={clearCart}>Clear Cart</button>
        <Link to="/checkout-success" className="checkout-btn">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}

export default Cart;
