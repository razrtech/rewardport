import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { workSlider } from "../constants/swiperConstants";

const WhatPeopleSay = () => {
  const datas = [
    {
      avatar: "https://www.rewardport.in/media/2022/07/man.png",
      review:
        "RewardPort has been wonderful in support and their innovative solutions for customers/consumers and quick service. Very few service provider give best service experience along with customer satisfaction.",
      user: "Sushil Patil",
      position: "Sr. Marketing Manager - Lupin",
    },
    {
      avatar: "https://www.rewardport.in/media/2022/07/woman.png",
      review:
        "RewardPort has always demonstrated a high degree of ownership in driving every project since the last 2 years. The timely turnaround of things and ensuring service levels are always top notch is one of the key reasons why trust levels with RewardPort are always high",
      user: "Bhawna Gokhani",
      position: "Marketing Manager - Colgate Palmolive India Pvt Ltd",
    },
  ];
  return (
    <section className="what-people-say-container">
      <h1 className="heading">What people say</h1>
      <div className="review-content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Swiper {...workSlider(2, 1)}>
                <div className="swiper-wrapper">
                  {datas.map((data, i) => (
                    <SwiperSlide key={i}>
                      <div>
                        <div className="dialog-box">{`“${data.review}”`}</div>
                        <div className="arrow"></div>
                      </div>
                      <div className="reviewer-section">
                        <img width={"100%"} height={"100%"} src={data.avatar} alt="" />
                        <div className="user">
                          <h1 className="username">{data.user}</h1>
                          <p className="position">{data.position}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatPeopleSay;
