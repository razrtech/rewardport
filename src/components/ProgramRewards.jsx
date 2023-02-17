import React from "react";
import StatsSection from "./StatsSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { workSlider } from "../constants/swiperConstants";
import { useState } from "react";
import { isMobile } from "react-device-detect";

const ProgramRewards = ({ cards, heading }) => {
  const [loadMore, setLoadmore] = useState(false);
  return (
    <section className="royalty-program-section">
      <StatsSection />
      <div className="reward-cards-section">
        <h1 className="heading">{heading}</h1>
        <div className="cards-container">
          <div className="container">
            <div className="row">
              <>
                {!isMobile ? (
                  <>
                    {cards.slice(0, 6).map((card, i) => (
                      <div className="col-lg-4" key={i}>
                        <div
                          className={`card-container cards-shadow ${i % 2 === 0 ? "" : "cards-border"}`}
                          data-aos={`${i % 2 === 0 ? "fade-right" : ""}`}
                          data-aos-once={true}
                          data-aos-easing={"ease-in"}
                          data-aos-duration="300"
                          data-aos-offset="100"
                        >
                          <div>
                            <h2 className="title">{card.title}</h2>
                            <p className="info">{card.subTitle}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                    {loadMore &&
                      cards.slice(6).map((card, i) => (
                        <div className="col-lg-4" key={i}>
                          <div
                            className={`card-container cards-shadow ${i % 2 === 0 ? "" : "cards-border"}`}
                            data-aos={`${i % 2 === 0 ? "fade-right" : ""}`}
                            data-aos-once={true}
                            data-aos-easing={"ease-in"}
                            data-aos-duration="300"
                            data-aos-offset="100"
                          >
                            <h2 className="title">{card.title}</h2>
                            <p className="info">{card.subTitle}</p>
                          </div>
                        </div>
                      ))}
                    <div className="btn-container">
                      <button type="button" className={`${loadMore ? "show-less" : "show-more"}`} onClick={() => setLoadmore(!loadMore)}>
                        {loadMore ? "Show Less" : "Show More"}
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="col-12">
                    <Swiper {...workSlider(4)}>
                      <div className="swiper-wrapper">
                        {cards.map((card, i) => (
                          <SwiperSlide key={i}>
                            <div
                              className={`card-container cards-shadow ${i % 2 === 0 ? "" : "cards-border"}`}
                              data-aos={`${i % 2 === 0 ? "slide-right" : ""}`}
                              // data-aos-offset="200"
                              data-aos-once={true}
                              data-aos-easing={"ease-in"}
                            >
                              <div>
                                <h2 className="title">{card.title}</h2>
                                <p className="info">{card.subTitle}</p>
                              </div>
                            </div>
                          </SwiperSlide>
                        ))}
                      </div>
                    </Swiper>
                  </div>
                )}
              </>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramRewards;
