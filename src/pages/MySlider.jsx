import { useEffect, useState } from "react";
import Slider from "react-slick";
import Test from "../components/Test";
import '../index.scss'

const MySlider = () => {
     const [activeSlide, setActiveSlide] = useState(0);
   
     useEffect(() => {
       const interval = setInterval(() => {
         setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
       }, 3000);
   
       return () => {
         clearInterval(interval);
       };
     }, []);
   
     const slides = ["Slide 1", "Slide 2", "Slide 3"];
   
     return (
       <Slider>
         {slides.map((slide, index) => (
           <Test
             key={index}
             text={slide}
             active={index === activeSlide}
           />
         ))}
       </Slider>
     );
   };
   
   export default MySlider;