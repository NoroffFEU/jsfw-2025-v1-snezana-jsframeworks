import React from "react";
import { useParams } from "react-router-dom";
import { useApi } from "../../hooks/useApi";
import { useCartStore } from "../../store/cartStore";

function Product() {
  const { id } = useParams();
  const { data: product, isLoading, isError } = useApi(`https://v2.api.noroff.dev/online-shop/${id}`);
  const addToCart = useCartStore((state) => state.addToCart);

  console.log("🧠 Product data from API:", product);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong loading the product.</p>;
  if (!product || !product.title) return <p>Product not found.</p>;

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.title} added to cart!`);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{product.title}</h1>
      {product.image && product.image.url && (
        <img
          src={product.image.url}
          alt={product.image.alt || product.title}
          width="300"
          style={{ borderRadius: "8px" }}
        />
      )}
      <p>{product.description}</p>
      <p>
        Price: <strong>{product.discountedPrice || product.price} NOK</strong>
      </p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
