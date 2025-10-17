import React from "react";

function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ padding: "8px", width: "300px", margin: "20px 0" }}
    />
  );
}

export default SearchBar;
