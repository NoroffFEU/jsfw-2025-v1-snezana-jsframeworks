import React from "react";
import { Link } from "react-router-dom";
import { useApi } from "../../hooks/useApi";

const Home = () => {
  const { data: products, isLoading, isError } = useApi("https://v2.api.noroff.dev/online-shop");

  if (isLoading) return <p>Loading products...</p>;
  if (isError) return <p>Could not load products 😢</p>;

  return (
    <div className="home">
      <h1>Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
              <img src={product.image.url} alt={product.image.alt || product.title} width="200" />
              <h3>{product.title}</h3>
              <p>{product.price} NOK</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
