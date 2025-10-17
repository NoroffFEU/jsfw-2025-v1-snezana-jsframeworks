import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ id, title, image, price, discountedPrice }) {
  const discount =
    price > discountedPrice
      ? Math.round(((price - discountedPrice) / price) * 100)
      : 0;

  return (
    <div className="product-card">
      <img src={image?.url} alt={image?.alt || title} width="200" />
      <h3>{title}</h3>
      <p>
        {discount > 0 ? (
          <>
            <span style={{ textDecoration: "line-through", color: "gray" }}>
              {price} NOK
            </span>{" "}
            <strong>{discountedPrice} NOK</strong> <span>({discount}% off)</span>
          </>
        ) : (
          <strong>{price} NOK</strong>
        )}
      </p>
      <Link to={`/product/${id}`}>View Product</Link>
    </div>
  );
}

export default ProductCard;
