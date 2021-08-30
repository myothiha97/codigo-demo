import React, { useState } from "react";

const CategoryLink = ({ children }) => {
  const [isActive, toggleActive] = useState(false);
  return (
    <div
      className={`catergory__left-item ${isActive ? "is-active" : ""}`}
      onClick={() => toggleActive(!isActive)}
    >
      {children}
    </div>
  );
};

export default CategoryLink;
