import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Snežana Store. All rights reserved.</p>

        <div className="footer-links">
          <a
            href="https://www.noroff.no/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Noroff
          </a>
          <a
            href="https://github.com/NoroffFEU/jsfw-2025-v1-snezana-jsframeworks"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo
          </a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
