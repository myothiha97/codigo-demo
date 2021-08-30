import React from "react";
import Card from "../card/card";
import Link from "next/link";

const CardGrid = ({ cards }) => {
  return (
    <React.Fragment>
      {cards.length > 0 ? (
        <div className={`workgrid`}>
          {cards.map((card, idx) => (
            <Link key={idx} href="/work-detail">
              <div
                className={`card-wrapper ${card.className} ${
                  card.whenHover ? card.whenHover : ""
                }`}
              >
                <Card>
                  <img className="card-bg" src={card.imgUrl} alt="" />
                  <div
                    className={`card-content card-content--1 ${
                      card.color ? card.color : ""
                    }`}
                  >
                    {card.heading}
                  </div>
                  <div
                    className={`card-content card-content--2 ${
                      card.color ? card.color : ""
                    }`}
                  >
                    {card.text}
                  </div>
                  <div className="card-content card-content--3">
                    {card.icons.map((icon, id) => (
                      <div
                        key={id}
                        className="card-icon"
                        style={{ backgroundImage: `url${icon}` }}
                      ></div>
                    ))}
                  </div>
                </Card>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="card-notfound-wrapper">
          <div className="card-notfound">
            UI/UX There is no specific project related with the tag name
            (media)! Do you want to show all the projects instead?
          </div>
        </div>
      )}{" "}
    </React.Fragment>
  );
};

export default CardGrid;
