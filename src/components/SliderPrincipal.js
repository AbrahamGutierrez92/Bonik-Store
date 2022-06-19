import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./sliderPrincipal.css";
import Slide1 from "../images/image1.png";
import Slide2 from "../images/image1.png";
import Slide3 from "../images/image1.png";



const SliderPrincipal = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
       <Slider {...settings} className="cajaSlider">
          <div className="caja-imagen">
            <img src={Slide1} />
          </div>

          <div className="caja-imagen">
            <img src={Slide2} />   
          </div>

          <div className="caja-imagen">
            <img src={Slide3} />   
          </div>
        </Slider>
  )
}

export default SliderPrincipal;