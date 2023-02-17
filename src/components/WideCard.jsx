import React from "react";

const WideCard = ({ info }) => {
  return (
    <section className="widecard-container">
      <h1 className="title">{info}</h1>
      {/* <button className={"hover-animation"}>Get a free consultaion</button> */}
      <div className="wrapper">
        <a href="#">
          <span>Get a free consultaion</span>
        </a>
      </div>
    </section>
  );
};

export default WideCard;
