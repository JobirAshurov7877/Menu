import Slider from "react-slick";
import { Header, HomeSlider } from "../../components";
import "./Home.scss";
import slider_bg_1 from "../../assets/images/main-h-new-rev-img-1.jpg";
import slider_bg_2 from "../../assets/images/main-h-new-rev-img-2.jpg";
import slider_bg_3 from "../../assets/images/main-h-new-rev-img-3.jpg";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <SlArrowRight style={{ color: "#c9ab81", fontSize: "37px" }} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <SlArrowLeft style={{ color: "#c9ab81", fontSize: "35px" }} />
    </div>
  );
}

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    fade: true,
    cssEase: "linear",
    pauseOnHover: false,
    
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="home">
      <Header />
      <main className="main-slider">
        <div>
          <Slider {...settings}>
            <div>
              <img src={slider_bg_1} alt="slider-bg" className="slider-bg" />
              <HomeSlider />
            </div>
            <div>
              <img src={slider_bg_2} alt="slider-bg" className="slider-bg" />
              <HomeSlider />
            </div>
            <div>
              <img src={slider_bg_3} alt="slider-bg" className="slider-bg" />
              <HomeSlider />
            </div>
          </Slider>
        </div>
      </main>
      <div className="home-line_l"></div>
      <div className="home-line_r"></div>
    </div>
  );
};

export default Home;
