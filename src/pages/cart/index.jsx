import React, { useState } from "react";
import "./Cart.css";
import { useCartStore } from "../../store/cartStore";

function Cart() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  const [showModal, setShowModal] = useState(false);

  const total = cart.reduce(
    (sum, item) => sum + (item.discountedPrice || item.price),
    0
  );

  const handleCheckout = () => {
    setShowModal(true);
    clearCart();
  };

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

          <div className="cart-actions">
            <button className="btn clear-btn" onClick={clearCart}>
              🧹 Clear Cart
            </button>
            <div className="cart-total">
              <strong>Total:</strong> ${total.toFixed(2)}
            </div>
            <button className="btn checkout-btn" onClick={handleCheckout}>
              💳 Checkout
            </button>
          </div>
        </>
      )}

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>✅ Checkout Successful!</h2>
            <p>Thank you for your purchase.</p>
            <button className="btn" onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;