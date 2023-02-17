import React from "react";
import { isMobile } from "react-device-detect";
import { Swiper, SwiperSlide } from "swiper/react";
import { workSlider } from "../constants/swiperConstants";

const Achievements = () => {
  const datas = [
    {
      image: "https://www.rewardport.in/media/2022/07/1800x1800-Awards-StarRetailer-300x300.jpeg",
      title: "Excellence in retailing",
      subTitle: ["Best Promotional Campaign executed for Retail Brand", "Awarding Authority: Star Retailer Awards 2013 "],
    },
    {
      image: "https://www.rewardport.in/media/2022/07/Loyalty-Summit-300x300.jpeg",
      title: "Excellence in executing loyalty program",
      subTitle: ["Best Loyalty & Engagement Program", "Awarding Authority: Loyalty Summit"],
    },
    {
      image: "https://www.rewardport.in/media/2022/07/1800x1800-Awards-SAPS-300x300.jpeg",
      title: "Marketer of the year",
      subTitle: "Awarding Authority: South Asian Business Excellence Awards 2019",
    },
    {
      image: "https://www.rewardport.in/media/2022/07/1800x1800-Awards-Indian-E-Retail-300x300.jpeg",
      title: "Best sales promotion campaign",
      subTitle: ["Awarding Authority: Indian eRetail Awards 2012"],
    },
    {
      image: "https://www.rewardport.in/media/2022/07/1800x1800-Awards-CustomerLoyalty-300x300.jpeg",
      title: "Best use of experiential / live marketing in a loyalty program",
      subTitle: ["Program executed for Reliance RetailAwarding", "Authority: Customer Loyalty Awards by Kamikaze"],
    },
    {
      image: "https://www.rewardport.in/media/2022/07/MARKETING-AGENCY-OF-THE-YEAR-300x300.jpeg",
      title: "Marketing agency of the year",
      subTitle: ["Best promotional campaign executed for Nestle Kitkat", "Awarding Authority: South Asian Business Excellence Awards 2019"],
    },
  ];
  return (
    <section className="achievements-section">
      <h1 className="heading">Achievement & awards</h1>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Swiper {...workSlider(4)} autoplay={true} loop={true} navigation={!isMobile}>
              <div className="swiper-wrapper">
                {datas.map((data, i) => (
                  <SwiperSlide key={i}>
                    <div className="awards-card">
                      <img width={"100%"} height={"100%"} src={data.image} alt="" />
                      <div className="overlay" />
                      <div className="awards-content">
                        <h3 className="title">{data.title}</h3>
                        <p className="info">{data.subTitle}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
