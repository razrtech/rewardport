import React, { useState } from "react";

const Stakeholders = ({ datas, heading }) => {
  const [loadMore, setLoadmore] = useState(false);

  return (
    <section className="stakeholders-container">
      <h1 className="heading">{heading}</h1>
      <div className="container">
        <div className="row">
          {datas.slice(0, 6).map((data, i) => (
            <div className="col-lg-4" key={i}>
              <div className="relation-card ">
                <div className="icon red">
                  <img width={"100%"} height={"100%"} src={data.icon} alt="" />
                </div>
                <h2 className="title">{data.title}</h2>
                <p className="info">{data.info}</p>
              </div>
            </div>
          ))}
          {loadMore &&
            datas.slice(6).map((data, i) => (
              <div className="col-lg-4" key={i}>
                <div className="relation-card ">
                  <div className="icon red">
                    <img width={"100%"} height={"100%"} src={data.icon} alt="" />
                  </div>
                  <h2 className="title">{data.title}</h2>
                  <p className="info">{data.info}</p>
                </div>
              </div>
            ))}
        </div>
        {datas.length > 3 && (
          <div className="btn-container">
            <button type="button" className={`${loadMore ? "show-less" : "show-more"}`} onClick={() => setLoadmore(!loadMore)}>
              {loadMore ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Stakeholders;
