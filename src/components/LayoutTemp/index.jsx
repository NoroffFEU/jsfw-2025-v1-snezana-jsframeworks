import React from "react";

function Layout({ children }) {
  return (
    <div>
      <header style={{ padding: "1rem", background: "#eee" }}>
        <h2>🛍️ Snežana React Store</h2>
      </header>
      <main>{children}</main>
      <footer
        style={{
          padding: "1rem",
          marginTop: "2rem",
          background: "#eee",
          textAlign: "center",
        }}
      >
        <p>© 2025 Snežana Store</p>
      </footer>
    </div>
  );
}

export default Layout;
