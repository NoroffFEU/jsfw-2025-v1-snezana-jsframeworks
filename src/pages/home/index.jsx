import React, { useState } from "react";
import "./Home.css";
import { useApi } from "../../hooks/useApi";
import { useCartStore } from "../../store/cartStore";

function Home() {
  const { data: products, isLoading, isError } = useApi("https://v2.api.noroff.dev/online-shop");
  const addToCart = useCartStore((state) => state.addToCart);
  const [searchTerm, setSearchTerm] = useState("");

  // Handle loading and error
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to load products.</p>;

  // Filter products live as user types
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-container">
      <h1>🛍 Shop All Products</h1>

      {/* 🔍 Search Bar */}
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {filteredProducts.length === 0 ? (
        <p className="no-results">No products found.</p>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="image-wrapper">
                <img src={product.image.url} alt={product.title} />
              </div>
              <div className="product-info">
                <h3>{product.title}</h3>
                <p className="desc">{product.description}</p>
                <div className="price-section">
                  {product.discountedPrice < product.price ? (
                    <>
                      <span className="old-price">${product.price.toFixed(2)}</span>
                      <span className="new-price">${product.discountedPrice.toFixed(2)}</span>
                    </>
                  ) : (
                    <span className="new-price">${product.price.toFixed(2)}</span>
                  )}
                </div>
                <button onClick={() => addToCart(product)} className="add-btn">
                  🛒 Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
