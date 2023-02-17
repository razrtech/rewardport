import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { workSlider } from "../constants/swiperConstants";
import conceptualizeIcon from "../images/loyalty-icons/how-we-do/Conceptualize.webp";
import designIcon from "../images/loyalty-icons/how-we-do/Design.webp";
import engageIcon from "../images/loyalty-icons/how-we-do/Engage.webp";
import fulfilmentIcon from "../images/loyalty-icons/how-we-do/Fulfilment.webp";
import measureIcon from "../images/loyalty-icons/how-we-do/Measure.webp";
import techIcon from "../images/loyalty-icons/how-we-do/Tech.webp";
import { isMobile } from "react-device-detect";

const HowWedoit = () => {
  const howWeDoDatas = [
    {
      icon: conceptualizeIcon,
      class: "",
      title: "Conceptualize",
      subTitle: "We start at the drawing board and conceptualize your loyalty program from scratch",
    },
    {
      icon: designIcon,
      class: "",
      title: "Design",
      subTitle: "We translate this vision into design and create the entire program’s creative language",
    },
    {
      icon: techIcon,
      class: "",
      title: "Tech",
      subTitle: "We imbibe various tech to ensure the channel partner loyalty program is adaptable by the target audience",
    },
    {
      icon: engageIcon,
      class: "",
      title: "Engage",
      subTitle: "We create engagement with the audience, this include communications on birthdays, anniversaries, contests and more",
    },
    {
      icon: measureIcon,
      class: "",
      title: "Measure",
      subTitle: "We create engagement with the audience, this include communications on birthdays, anniversaries, contests and more",
    },
    {
      icon: fulfilmentIcon,
      class: "",
      title: "Fulfilment",
      subTitle: "We take care of rewards fulfilment, with 19000+ pin codes serviced across India",
    },
  ];

  return (
    <>
      <section className="how-wedo-container">
        <h1 className="heading">How we do it</h1>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Swiper {...workSlider()} navigation={!isMobile} autoplay={true}>
                <div className="swiper-wrapper">
                  {howWeDoDatas.map((data, i) => (
                    <SwiperSlide key={i}>
                      <div className="how-wedo-card">
                        <div className="icon">
                          <img width={"100%"} height={"100%"} src={data.icon} alt="" />
                        </div>
                        <h3 className="title">{data.title}</h3>
                        <p className="info">{data.subTitle}</p>
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

export default HowWedoit;
