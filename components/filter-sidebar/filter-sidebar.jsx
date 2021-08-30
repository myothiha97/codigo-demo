import React, { useState } from "react";

const FilterSideBar = () => {
  const [isFilterOnboard, toggleFilterOnBoard] = useState(false);
  return (
    <div className="work-filter-container">
      <div
        className={`work-filter-wrapper ${
          isFilterOnboard ? "is--expanded" : "is--collapsed"
        }`}
      >
        <div
          className={`filter-ball ${height > 690 ? "on--board" : "on--exit"}`}
          onClick={() => toggleFilterOnBoard(!isFilterOnboard)}
        >
          <p className="filter-text">Filter</p>
        </div>
        <div className={`work-category-filter__wrapper `}>
          {Categories.map((category, idx) => (
            <div
              key={idx}
              className={`work-category-filter__item`}
              onClick={() => {
                handleClickCategory(category);
                toggleFilterOnBoard(!isFilterOnboard);
              }}
            >
              <div
                className="category-filter__text"
                onClick={() => handleClickCategory(category)}
              >
                {category.name}
              </div>
            </div>
          ))}
        </div>
        <div className="work-category-legend__wrapper">
          <p className="work-category-legend__header">Legend</p>
          <div className="work-category-legend__item-wrapper">
            <div className="work-legend__item">
              <div className="work-legend__item-icon"></div>
              <p className="work-legend__item-text">App</p>
            </div>
            <div className="work-legend__item">
              <div className="work-legend__item-icon"></div>
              <p className="work-legend__item-text">WEB</p>
            </div>
            <div className="work-legend__item">
              <div className="work-legend__item-icon"></div>
              <p className="work-legend__item-text">CMS</p>
            </div>
            <div className="work-legend__item">
              <div className="work-legend__item-icon"></div>
              <p className="work-legend__item-text">UI/UX</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSideBar;
