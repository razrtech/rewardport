import React from "react";
import { Link } from "gatsby";
import logo from "../images/logo.png";

const HeroSection = ({ heading, subHeading, className }) => {
  return (
    <div className={`hero-section-container`}>
      <div className={`cover-photo ${className}`}></div>
      <div className="row h-100">
        <div className="col-lg-6">
          <div className="left-side">
            <a href="#">
              <img width={"100%"} height={"100%"} id="logo" alt="logo" src={logo} />
            </a>
            <h2 className="title">{heading}</h2>
            <p className="subtitle">{subHeading}</p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-container" data-aos="fade-up" data-aos-offset="200" data-aos-once={true}>
            <h2 className="title">Get In Touch</h2>
            <h3 className="subtitle">Talk to us today to excute a</h3>

            <div className="form-body">
              <p className="form-label">Full Name</p>
              <input type="text" placeholder="Type here..." />

              <p className="form-label">Mobile Number</p>
              <input type="text" placeholder="+91" />

              <p className="form-label">Email Address</p>
              <input type="text" placeholder="yourname@example.com" />

              <p className="form-label">Company Name</p>
              <input type="text" placeholder="Type here..." />

              <button className="form-btn">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
