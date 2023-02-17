import React from "react";

const CampaignHelp = ({ heading, subHeading = null, ...props }) => {
  const loyaltyData1 = props.loyaltyData1;
  const loyaltyData2 = props.loyaltyData2;

  return (
    <>
      <section className="loyalty-campaign-container">
        <h1 className="heading">{heading}</h1>
        <h3 className="subheading">{subHeading}</h3>
        <div className="loyalty-campaign-content">
          <div className="container">
            <div className="row justify-content-center">
              {loyaltyData1.map((data, i) => (
                <div key={i} className="col-lg-2 col-6" data-aos="fade" data-aos-offset="200" data-aos-once={true}>
                  <div className="loyalty-card">
                    <img width={"100%"} height={"100%"} src={data.icon} alt="" />
                    <p className="title">{data.title}</p>
                    <p className="info">{data?.info}</p>
                  </div>
                </div>
              ))}
              {loyaltyData2.map((data, i) => (
                <div key={i} className="col-lg-3 col-6" data-aos="fade" data-aos-offset="200" data-aos-once={true}>
                  <div className="loyalty-card">
                    <img width={"100%"} height={"100%"} src={data.icon} alt="" />
                    <p className="title">{data.title}</p>
                    <p className="info">{data?.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CampaignHelp;
