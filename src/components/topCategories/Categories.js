import React from "react";
import "./categories.css";
import top1 from "../../images/top/category-1.png";
import top2 from "../../images/top/category-2.png";
import top3 from "../../images/top/category-3.png";

const Categories = () => {
  return (
    <div className="categories">
        <h1>Top Categories</h1>
      <div className="container-categories">
        <div>
          <p>Headphone</p>
            <img src={top1}/>
        </div>

        <div>
        <p>Watch</p>
          <img src={top2}/>
        </div>

        <div>
        <p>Sunglass</p>
          <img src={top3}/>
        </div>
      </div>
    </div>
  );
};

export default Categories;
