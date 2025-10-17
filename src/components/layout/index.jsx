import React from "react";
import Header from "../Header";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <main style={{ padding: "20px" }}>{children}</main>
      <footer
        style={{
          padding: "20px",
          backgroundColor: "#f4f4f4",
          marginTop: "30px",
          textAlign: "center",
        }}
      >
        <p>© 2025 Snežana React Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Layout;
