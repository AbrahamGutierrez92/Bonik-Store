import React from "react";
import Arrivals from "../components/Arrivals/Arrivals";
import Banner from "../components/Banner/Banner";
import Beneficios from "../components/Beneficios/Beneficios";
import Discounts from "../components/Discounts/Discounts";
import Flash from "../components/Flash/Flash";
import Mobile from "../components/Mobile-phone/Mobile";
import Navbar from "../components/navbar/Navbar";
import SliderPrincipal from "../components/SliderPrincipal";
import Categories from "../components/topCategories/Categories";
import "./home.css";


const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="slider-Principal">
        <SliderPrincipal/>
      </div>

      <div className="home-flash">
        <Flash/>
      </div>

      <div className="top-categories">
        <Categories/>
      </div>

      <div className="arrivals-home">
         <Arrivals/>
      </div>

      <div className="discounts-home">
        <Discounts/>
      </div>

      <div className="Mobile-phone">
        <Mobile/>
      </div>

      <div className="banner-home">
       <Banner/>
      </div>

      <div className="beneficios-home">
        <Beneficios/>
      </div>
    </div>
  );
};

export default Home;
