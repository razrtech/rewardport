import React from "react";

const StatsSection = () => {
  return (
    <div className="stats-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="layer">
              <h2 className="stats-value">11k</h2>
              <h3 className="stats-label">Programs</h3>
              <p className="stats-info">We have executed programs across various categories in India and abroad.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="layer">
              <h2 className="stats-value">6</h2>
              <h3 className="stats-label">Countries</h3>
              <p className="stats-info">Our programs and solutions have made a mark in countries such as India, Sri Lanka, UAE, Kenya, United Kingdom & Canada.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="layer">
              <h2 className="stats-value">750+</h2>
              <h3 className="stats-label">Clients</h3>
              <p className="stats-info">Over 750 clients have trusted us with their marketing campaigns.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
