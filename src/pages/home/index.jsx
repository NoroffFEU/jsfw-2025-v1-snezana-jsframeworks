import React, { useState, useMemo } from "react";
import { useApi } from "../../hooks/useApi";

import "./Home.css";

function Home() {
  const { data: products, loading, error } = useApi("https://v2.api.noroff.dev/online-shop");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Collect unique categories
  const categories = useMemo(() => {
    if (!products) return [];
    const unique = new Set(products.map(p => p.category));
    return ["All", ...Array.from(unique)];
  }, [products]);

  // Filter logic
  const filteredProducts = useMemo(() => {
    if (!products) return [];
    return products.filter(p => {
      const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
      const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, searchQuery]);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Failed to load products.</p>;

  return (
    <div className="container">
      <h1>Shop Products</h1>

      <div className="filters">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="filter-select"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="filter-search"
        />
      </div>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => (
            <div key={p.id} className="card">
              <img src={p.image.url} alt={p.title} />
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <p>
                <strong>${p.discountedPrice ?? p.price}</strong>
              </p>
            </div>
          ))
        ) : (
          <p>No products match your filters.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
