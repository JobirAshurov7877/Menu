import "./Home-slider.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HomeSlider = () => {
  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <div className="slider-content">
      <div className="slider-content-wrap">
        <h5 data-aos="fade-down" data-aos-duration="2000">
          welcome to our delicious corner
        </h5>
        <div className="slider-main-text">
          <h1 >The Finest Drinks</h1>
        </div>
        <p>
          From the delicious food to wonderful cocktails, Laurent’s offer is
          guaranteed to satisfy all of your taste buds.
        </p>
      </div>
      <div className="slider-btn">
        <a  href="#">
        <span className="btn-before-line" style={{height: '51.6px'}}></span>
        <span className="btn-text">View More</span>
        <span className="btn-after-line" style={{height: '51.6px'}}></span>
        </a>
      </div>
    </div>
  );
};

export default HomeSlider;
