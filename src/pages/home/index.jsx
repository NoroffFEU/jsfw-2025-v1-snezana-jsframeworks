import React from "react";
import { useApi } from "../../hooks/useApi"; 
function Home() {
  console.log("🏠 Home component loaded");

  // ✅ Call the hook here — this should trigger all fetch logs
  const { data, isLoading, isError } = useApi("https://v2.api.noroff.dev/online-shop");

  if (isLoading) {
    return <p>Loading products...</p>;
  }

  if (isError) {
    return <p>⚠️ Error fetching products. Please try again later.</p>;
  }

  console.log("🛍️ Products in state:", data);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>🛒 Snežana Store</h1>
      {data && data.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "1rem",
          }}
        >
          {data.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "1rem",
              }}
            >
              <img
                src={product.image?.url}
                alt={product.title}
                style={{ width: "100%", borderRadius: "6px" }}
              />
              <h3>{product.title}</h3>
              <p>Price: {product.discountedPrice ?? product.price} NOK</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
}

export default Home;
