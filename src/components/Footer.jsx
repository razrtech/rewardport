import React from "react";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row footer-center">
          <div className="col-lg-4">
            <p className="enquiry">Corporate Enquiry: 9930 030 693</p>
          </div>
          <div className="col-lg-4">
            <img width={"100%"} height={"100%"} className="logo" src={logo} alt="" />
          </div>
          <div className="col-lg-4">
            <p className="credit">All Content REWARDPORT - All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
