import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import { useCartStore } from "../../store/cartStore";

function Cart() {
  const { cart, removeFromCart, clearCart } = useCartStore();

  const total = cart.reduce((sum, item) => sum + item.discountedPrice, 0);

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    alert("Proceeding to checkout...");
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-items">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image?.url} alt={item.title} />
                <div className="cart-item-info">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p>
                    <strong>{item.discountedPrice.toFixed(2)} NOK</strong>
                  </p>
                </div>
                <button
                  className="cart-button remove"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="cart-summary">
            <h2>Total: {total.toFixed(2)} NOK</h2>

            <div className="cart-buttons">
              <button className="cart-button remove" onClick={clearCart}>
                Clear Cart
              </button>
              <Link to="/checkout-success">
                <button className="cart-button" onClick={handleCheckout}>
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
