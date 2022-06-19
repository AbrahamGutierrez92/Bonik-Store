import React from 'react';
import "./arrivals.css";
import arrivals1 from "../../images/arrivals/arrivals1.png";
import arrivals2 from "../../images/arrivals/arrivals2.png"
import arrivals3 from "../../images/arrivals/arrivals3.png"
import arrivals4 from "../../images/arrivals/arrivals4.png"
import arrivals5 from "../../images/arrivals/arrivals5.png"
import arrivals6 from "../../images/arrivals/arrivals6.png"

const Arrivals = () => {
  return (
    <div className="arrivals">
        <h1>New Arrivals</h1>
      <div className="container-categories">
        <div>
          
            <img src={arrivals1}/>
            <p>Sunglass</p>
            <p className="precio-arrivals">$150</p>
        </div>

        <div>
          <img src={arrivals2}/>
          <p>Makeup</p>
            <p className="precio-arrivals">$250</p>
        </div>

        <div>

          <img src={arrivals4}/>
          <p>Lipstick</p>
            <p className="precio-arrivals">$15</p>
        </div>

        <div>
        
          <img src={arrivals5}/>
          <p>Green plant</p>
            <p className="precio-arrivals">$10</p>
        </div>

        <div>
       
          <img src={arrivals6}/>
          <p>Bonsai Tree</p>
            <p className="precio-arrivals">$400</p>
        </div>
      </div>
    </div>
  )
}

export default Arrivals;