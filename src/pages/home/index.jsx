import React from "react";
import { Link } from "react-router-dom";
import { useApi } from "../../hooks/useApi";
import "./Home.css";

export default function Home() {
  const { data: products, isLoading, isError } = useApi(
    "https://v2.api.noroff.dev/online-shop"
  );

  if (isLoading) return <p className="loading">Loading products...</p>;
  if (isError) return <p className="error">Failed to load products.</p>;

  // 🧠 Group products by category
  const categories = {};
  products.forEach((product) => {
    const category = product.category || "Other";
    if (!categories[category]) {
      categories[category] = [];
    }
    categories[category].push(product);
  });

  return (
    <div className="home-container">
      {Object.keys(categories).map((category) => (
        <section key={category} className="category-section">
          <h2 className="category-title">{category}</h2>
          <div className="product-grid">
            {categories[category].map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="product-card"
              >
                <img
                  src={product.image?.url}
                  alt={product.title}
                  className="product-image"
                />
                <div className="product-info">
                  <h3>{product.title}</h3>
                  <p className="price">
                    {product.discountedPrice < product.price ? (
                      <>
                        <span className="old-price">
                          ${product.price.toFixed(2)}
                        </span>
                        <span className="new-price">
                          ${product.discountedPrice.toFixed(2)}
                        </span>
                      </>
                    ) : (
                      <span>${product.price.toFixed(2)}</span>
                    )}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
