import React, { useState } from "react";
import "./Home.css";
import { useApi } from "../../hooks/useApi";
import { useCartStore } from "../../store/cartStore";
import { useLocation } from "react-router-dom";

function Home() {
  const { data: products, isLoading, isError } = useApi("https://v2.api.noroff.dev/online-shop");
  const addToCart = useCartStore((state) => state.addToCart);
  const location = useLocation();

  // ✅ For search and filter
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [addedMessage, setAddedMessage] = useState(""); // ✅ Animation message

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to load products.</p>;

  // ✅ Extract categories dynamically
  const categories = ["All", ...new Set(products.map((p) => p.tags?.[0] || "Uncategorized"))];

  // ✅ Filter logic
  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(searchQuery);
    const matchesCategory =
      selectedCategory === "All" || p.tags?.[0] === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // ✅ Handle Add to Cart with animation
  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedMessage(`${product.title} added to cart!`);
    setTimeout(() => setAddedMessage(""), 2000);
  };

  return (
    <div className="home-container">
      <h1>🛍 Shop All Products</h1>

      {/* ✅ Added message animation */}
      {addedMessage && <div className="cart-toast">{addedMessage}</div>}

      {/* Search results text */}
      {searchQuery && (
        <p className="search-results">
          Showing results for: <strong>"{searchQuery}"</strong>
        </p>
      )}

      {/* ✅ Category Filter */}
      <div className="filter-bar">
        <label htmlFor="category">Filter by Category:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* ✅ Product Grid */}
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
                <button onClick={() => handleAddToCart(product)} className="add-btn">
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
