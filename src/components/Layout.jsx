import React from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import Aos from "aos";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "../styles/style.css";
import "../styles/responsive.css";

const Layout = ({ children }) => {
  SwiperCore.use([Autoplay, Navigation, Pagination]);
  React.useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
      disable: "mobile",
    });
  }, []);
  return <>{children}</>;
};

export default Layout;
