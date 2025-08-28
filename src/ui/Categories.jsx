import React from "react";
const categories = ["All", "Coming Soon", "New Release", "Live"];

export default function Categories() {
  return (
    <div className="flex items-center gap-7">
      {categories.map((category) => (
        <button key={category}>{category}</button>
      ))}
    </div>
  );
}
