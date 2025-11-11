import React from "react";
import "./cart.css";
import { useCartStore } from "../../store/cartStore";

function Cart() {
  const { cart, removeFromCart, clearCart } = useCartStore((state) => ({
    cart: state.cart,
    removeFromCart: state.removeFromCart,
    clearCart: state.clearCart,
  }));

  const total = cart.reduce(
    (sum, item) => sum + (item.discountedPrice || item.price),
    0
  );

  return (
    <div className="cart-container">
      <h1>🛒 Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image.url} alt={item.title} />
                <div className="cart-details">
                  <h3>{item.title}</h3>
                  <p>${(item.discountedPrice || item.price).toFixed(2)}</p>
                </div>
                <button
                  className="btn remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  ❌ Remove
                </button>
              </div>
            ))}
          </div>

          {/* ✅ Buttons aligned and consistent */}
          <div className="cart-actions">
            <button className="btn clear-btn" onClick={clearCart}>
              🧹 Clear Cart
            </button>
            <div className="cart-total">
              <strong>Total:</strong> ${total.toFixed(2)}
            </div>
            <button className="btn checkout-btn">
              💳 Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
