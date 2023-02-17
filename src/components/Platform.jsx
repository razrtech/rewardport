import React from "react";
import mobileAppIcon from "../images/loyalty-icons/platform/Mobile-App-based.webp";
import OfflineModeIcon from "../images/loyalty-icons/platform/Offline-mode.webp";
import QrCodeIcon from "../images/loyalty-icons/platform/QR-code-based.webp";
import webBasedIcon from "../images/loyalty-icons/platform/Web-based.webp";

const Platform = () => {
  return (
    <section className="platform-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="left-side">
              <h3>Choose the platform of your choice, we have got you covered!</h3>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="right-side">
              <>
                <div className="row">
                  <div className="col-lg-5 col-6">
                    <div className="platform-card">
                      <img width={"100%"} height={"100%"} src={webBasedIcon} alt="" />
                      <h4 className="title">Web based</h4>
                    </div>
                    <div className="platform-card">
                      <img width={"100%"} height={"100%"} src={mobileAppIcon} alt="" />
                      <h4 className="title">Mobile App based</h4>
                    </div>
                  </div>
                  <div className="col-lg-5 col-6 elevate-cards">
                    <div className="platform-card">
                      <img width={"100%"} height={"100%"} src={QrCodeIcon} alt="" />
                      <h4 className="title">QR code based</h4>
                    </div>
                    <div className="platform-card">
                      <img width={"100%"} height={"100%"} src={OfflineModeIcon} alt="" />
                      <h4 className="title">Offline mode</h4>
                    </div>
                  </div>
                </div>
              </>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;
