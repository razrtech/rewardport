import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { brandsSlider, workSlider } from "../constants/swiperConstants";

const WhoAreWe = () => {
  const brands = [
    "https://www.rewardport.in/media/2022/07/Axis_Bank_logo.png",
    "https://www.rewardport.in/media/2022/07/BB-logo.png",
    "https://www.rewardport.in/media/2022/07/Britannia_logo.png",
    "https://www.rewardport.in/media/2022/07/Cadbury1.png",
    "https://www.rewardport.in/media/2022/07/Cocacola.png",
    "https://www.rewardport.in/media/2022/07/Kelloggs.png",
    "https://www.rewardport.in/media/2022/07/Kit-Kat-Logo.png",
    "https://www.rewardport.in/media/2022/07/Nestle-Logo.png",
  ];
  return (
    <>
      <section className="who-are-we-section">
        <h1 className="heading">Who are we</h1>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="icon">
                <img width={940} height={431} src="https://www.rewardport.in/media/2022/07/Rwardport-Logo.jpeg" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <p className="info">
                RewardPort is India’s leading rewards and loyalty marketing company. RewardPort has established a strong presence in India and around the globe with its marketing expertise. Having
                worked with some of the biggest brands of India and around the world including Kenya and Dubai, we take humble pride in being marketing experts with a spectrum of products and
                solutions which have been devised in-house.
              </p>
              <p className="info">Our expertise lies in sales loyalty program, channel loyalty program, retail loyalty, customer loyalty program and more.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="brands-section">
        <div className="container h-100">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-12">
              <Swiper {...brandsSlider} loop={true} autoplay={true}>
                <div className="swiper-wrapper">
                  {brands.map((brand, i) => (
                    <SwiperSlide key={i}>
                      <div className="brand-card">
                        <img width={"100%"} height={"100%"} src={brand} alt="" />
                      </div>
                    </SwiperSlide>
                  ))}
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoAreWe;
