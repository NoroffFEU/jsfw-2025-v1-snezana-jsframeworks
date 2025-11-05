import React from "react";
import { useCartStore } from "../../store/cartStore";
import "./cart.css";

function Cart() {
  const { cart, removeFromCart, clearCart } = useCartStore();

  const total = cart.reduce(
    (sum, item) => sum + (item.discountedPrice ?? item.price) * item.quantity,
    0
  );

  return (
    <div className="container cart-page">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty 🛒</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image?.url} alt={item.title} />
                <div className="cart-details">
                  <h3>{item.title}</h3>
                  <p>${(item.discountedPrice ?? item.price).toFixed(2)}</p>
                  <p>Qty: {item.quantity}</p>
                </div>
                <button
                  className="btn-remove"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total: ${total.toFixed(2)}</h3>
            <button className="btn-clear" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
