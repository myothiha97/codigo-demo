import React from "react";

const HiddenMenu = ({ isActive }) => {
  return (
    <div className={`hidden-menu ${isActive ? "is-active" : ""}`}>
      <div className="circle">
        <div className="ratio"></div>
      </div>
      <div className={`bars ${isActive ? "is-active" : ""}`}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default HiddenMenu;
