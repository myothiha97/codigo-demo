import React, { useState } from "react";

// import cards from "./card.data";
import cards from "../../data/workpage/card.data";
import categories from "../../data/workpage/category.data";
import sortCategories from "../../utils/category/sortCategory";

import CardGrid from "../../components/cardGrid/cardGrid";

const WorkPage = () => {
  const [Categories, setCategories] = useState(categories);
  const [Cards, setCards] = useState(cards);
  const handleClickCategory = (target) => {
    if (target.tag === "all") {
      setCards(cards);
    } else {
      const newCards = sortCategories(target, cards);
      // console.log(newCards);
      setCards(newCards);
    }

    const newCategories = Categories.map((categorie) => {
      if (categorie.name === target.name) {
        categorie.isActive = true;
        return categorie;
      } else {
        categorie.isActive = false;
        return categorie;
      }
    });
    setCategories(newCategories);
  };
  return (
    <div className="workpage">
      <div className="work">
        <div className="work-headings">
          <p className="work-header work-header--1">Here’s 5% of</p>
          <p className="work-header work-header--2">our published work.</p>
          <p className="work-header work-header--3">See 100% of our power.</p>
        </div>
        <div className="category-lists">
          <div className="category-lists__left">
            {Categories.map((category, idx) => (
              <div
                key={idx}
                className={`catergory__left-item ${
                  category.isActive ? "is-active" : ""
                }`}
                onClick={() => handleClickCategory(category)}
              >
                <p className="item-text">{category.name}</p>
              </div>
            ))}
          </div>
          <div className="category-lists__right">
            <p className="list-right__header">LEGEND</p>
            <div className="list-right__items">
              <div className="item-wrapper clear-fix margin-bot--15">
                <div className="item-icon"></div>
                <p className="item-text">APP</p>
              </div>
              <div className="item-wrapper margin-bot--15">
                <div className="item-icon"></div>
                <p className="item-text">WEB</p>
              </div>
              <div className="item-wrapper clear-fix">
                <div className="item-icon"></div>
                <p className="item-text">CMS</p>
              </div>
              <div className="item-wrapper">
                <div className="item-icon"></div>
                <p className="item-text">UI/UX</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CardGrid cards={Cards}></CardGrid>
    </div>
  );
};

export default WorkPage;
