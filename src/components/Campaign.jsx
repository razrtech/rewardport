import React from "react";

const Campaign = ({ datas }) => {
  return (
    <section className="campaign-section">
      <h1 className="heading">What type of campaigns can be executed</h1>
      <div className="container">
        <div className="row">
          {datas.map((data, i) => (
            <div className="col-lg-6" key={i}>
              <div className="campaign-card" data-aos={"fade"} data-aos-offset="100" data-aos-once={true}>
                <div className="icon">
                  <img width={"100%"} height={"100%"} src={data.icon} alt="" />
                </div>
                <div className="content-section">
                  <h3 className="title">{data.title}</h3>
                  <p className="info">{data.subTitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Campaign;
