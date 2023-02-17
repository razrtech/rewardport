import React from "react";
import { isMobile } from "react-device-detect";
import { Swiper, SwiperSlide } from "swiper/react";
import { workSlider } from "../constants/swiperConstants";
import FlipCard from "./FlipCard";
import travelIcon from "../images/reward-types/travel.webp";
import entertainmentIcon from "../images/reward-types/entertainment.webp";
import healthIcon from "../images/reward-types/health_wellness.webp";
import others from "../images/reward-types/others.webp";
import shopping from "../images/reward-types/shopping.webp";
import utils from "../images/reward-types/utilities.webp";
import food from "../images/reward-types/food_dine.webp";

const RewardTypes = () => {
  const rewards = [
    {
      image: travelIcon,
      title: "Travel",
      data: ["VacPac", "AirPac", "Travel Gift", "Certificates", "TripXOXO", "Experiences", "Vouchers"],
    },
    {
      image: entertainmentIcon,
      title: "Entertainment",
      data: ["Movies", "OTT Platforms"],
    },
    {
      image: healthIcon,
      title: "Health & wellness",
      data: ["Diagnostics", "Medicines", "Spa Vouchers", "Salon Rewardz", "Home Fitness", "Meditation"],
    },
    {
      image: food,
      title: "Food & Dine",
      data: ["Dining Vouchers", "I want my Pizza", "My Scoop of Ice cream", "Food Delivery", "My Cup of Coffee"],
    },
    {
      image: utils,
      title: "Utilities",
      data: ["Homecare", "Cashbacks", "Recharge", "Mobile Bills", "Electricity Bills", "DTH"],
    },
    {
      image: shopping,
      title: "Shopping Vouchers",
      data: ["Discount Vouchers", "Gift Vouchers"],
    },
    {
      image: others,
      title: "Others",
      data: ["Cab rides", "Kids Rewards", "E-Learn", "RewardPort MasterCard", "QR Based Programs"],
    },
  ];

  const recentCampaigns = [
    "https://www.rewardport.in/media/2022/07/Haldirams.jpeg",
    "https://www.rewardport.in/media/2022/07/Horlicks-Womens-Plus.jpeg",
    "https://www.rewardport.in/media/2022/07/Philips-Monsoon.png",
    "https://www.rewardport.in/media/2022/07/Uniiver-Swiggy.jpg",
    "https://www.rewardport.in/media/2022/07/Parle.jpeg",
    "https://www.rewardport.in/media/2022/08/Ferrero-Rocher.jpg",
    "https://www.rewardport.in/media/2022/08/HNG-Float-Glass.jpg",
    "https://www.rewardport.in/media/2022/08/Saridon.jpg",
    "https://www.rewardport.in/media/2022/08/Stayfree.jpg",
    "https://www.rewardport.in/media/2022/08/Abott.jpg",
    "https://www.rewardport.in/media/2022/07/Colgate-2021.jpg",
  ];

  return (
    <>
      <section className="reward-types-container">
        <h1 className="heading">Types of rewards</h1>
        <h3 className="sub-heading">We also have diverse products across various categories such as travel, entertainment, health, wellness, food and dine, utilities and retail.</h3>
        <div className="rewards-slider" data-aos="slide-up" data-aos-offset="200" data-aos-once={true}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <Swiper {...workSlider(4.5)} navigation={!isMobile} autoplay={true}>
                  <div className="swiper-wrapper">
                    {rewards.map((reward, i) => (
                      <SwiperSlide key={i}>
                        <FlipCard card={reward} />
                      </SwiperSlide>
                    ))}
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="recent-campaigns-container">
        <h1 className="heading">Our recent campaigns</h1>
        <div className="campaign-slider">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <Swiper {...workSlider(3)} navigation={!isMobile}>
                  <div className="swiper-wrapper">
                    {recentCampaigns.map((campaign, i) => (
                      <SwiperSlide key={i}>
                        <div className="campaign-card">
                          <img width={"100%"} height={"100%"} src={campaign} alt="" />
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
    </>
  );
};

export default RewardTypes;
