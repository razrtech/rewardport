import React from "react";

const FlipCard = ({ card }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front rewards-card">
          <img width={"100%"} height={"100%"} src={card.image} alt="" />
          <div className="overlay"></div>
          <p className="info">{card.title}</p>
        </div>
        <div className="flip-card-back">
          {card.data.map((data, i) => (
            <p key={i}>{data}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
