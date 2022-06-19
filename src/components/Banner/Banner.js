import React from 'react';
import "./banner.css";
import imagen1 from "../../images/imagen2.jpg";

const Banner = () => {
  return (
    <div className="banner">
     <div className="container-banner">
        
          <img src={imagen1}/>

     </div>
    </div>
  )
}

export default Banner;