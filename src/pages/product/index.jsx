import React from "react";
import { useParams } from "react-router-dom";
import { useApi } from "../../hooks/useApi";

const Product = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useApi(`https://v2.api.noroff.dev/online-shop/${id}`);

  if (isLoading) return <p>Loading product...</p>;
  if (isError) return <p>Could not load product 😢</p>;

  // ✅ FIXED: The product data is not nested under "data"
  const product = data;

  if (!product) return <p>Product not found.</p>;

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      {product.image && (
        <img
          src={product.image.url}
          alt={product.image.alt || product.title}
          width="300"
          style={{ borderRadius: "8px", marginBottom: "1rem" }}
        />
      )}
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p><strong>{product.discountedPrice} NOK</strong></p>
      <button
        style={{
          padding: "0.7rem 1.2rem",
          border: "none",
          background: "#222",
          color: "#fff",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
