import React from "react";
import "./discounts.css";
import discounts1 from "../../images/discount/discount-1.png";
import discounts2 from "../../images/discount/discount-2.png";
import discounts3 from "../../images/discount/discount-3.png";
import discounts4 from "../../images/discount/discount-4.png";
import discounts5 from "../../images/discount/discount-5.png";
import discounts6 from "../../images/discount/discount-6.png";

const Discounts = () => {
  return (
    <div className="discounts">
      <h1>Big Discounts</h1>
      <div className="container-categories">
        <div>
          <img src={discounts1} />
          <p>BenuSx 2022</p>
          <p className="precio-arrivals">$250</p>
        </div>

        <div>
          <img src={discounts2} />
          <p>Sony Tv</p>
          <p className="precio-arrivals">$650</p>
        </div>

        <div>
          <img src={discounts3} />
          <p>Play Station4</p>
          <p className="precio-arrivals">$450</p>
        </div>

        <div>
          <img src={discounts4} />
          <p>Sterio </p>
          <p className="precio-arrivals">$250</p>
        </div>

        <div>
          <img src={discounts5} />
          <p>Tony BGB</p>
          <p className="precio-arrivals">$25</p>
        </div>

        <div>
          <img src={discounts6} />
          <p>RG Products</p>
          <p className="precio-arrivals">$400</p>
        </div>
      </div>
    </div>
  );
};

export default Discounts;
