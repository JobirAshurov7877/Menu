import { CSSTransition } from "react-transition-group";
import "./Home-slider.scss";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const HomeSlider = () => {
  return (
    <div className="slider-content">
      <div className="slider-content-wrap">
        <CSSTransition>
          <h5>welcome to our delicious corner</h5>
        </CSSTransition>
        <div className="slider-main-text">
          <h1>The Finest Drinks</h1>
        </div>
        <p>
          From the delicious food to wonderful cocktails, Laurent’s offer is
          guaranteed to satisfy all of your taste buds.
        </p>
      </div>
      <div className="slider-btn">
        <Link to={'/catalog'}>
          <span className="btn-before-line" style={{ height: "51.6px" }}></span>
          <span className="btn-text">Menu</span>
          <span className="btn-after-line" style={{ height: "51.6px" }}></span>
        </Link>
      </div>
    </div>
  );
};

export default HomeSlider;
