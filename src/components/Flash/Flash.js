import React from "react";
import "./flash.css";
import flash1 from "../../images/flash/flash-1.png";
import flash2 from "../../images/flash/flash-2.png";
import flash3 from "../../images/flash/flash-3.png";
import flash4 from "../../images/flash/flash-4.png";

const Flash = () => {
  return (
    <div className="container-flash">
        <h1>Flash Delas</h1>
      <div className="flash">
        
        <div className="caja-flash">
          <div className="descuento-flash">
            <p>50% off</p>
          </div>
  
          <div className="imagen-flash-caja">
            <img src={flash1} />
          </div>
  
          <div className="descripcion-flash-caja">
            <h3>Shoes</h3>
  
            <div className="estrella-flash-caja">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
  
            <strong>$100.00</strong>
  
            <div className="boton-flash-caja">
              <button>
                <strong>+</strong>
              </button>
            </div>
          </div>
        </div>
  
        <div className="caja-flash">
          <div className="descuento-flash">
            <p>50% off</p>
          </div>
  
          <div className="imagen-flash-caja">
            <img src={flash2} />
          </div>
  
          <div className="descripcion-flash-caja">
            <h3>Shoes</h3>
  
            <div className="estrella-flash-caja">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
  
            <strong>$100.00</strong>
  
            <div className="boton-flash-caja">
              <button>
                <strong>+</strong>
              </button>
            </div>
          </div>
        </div>
  
        <div className="caja-flash">
          <div className="descuento-flash">
            <p>50% off</p>
          </div>
  
          <div className="imagen-flash-caja">
            <img src={flash3} />
          </div>
  
          <div className="descripcion-flash-caja">
            <h3>Shoes</h3>
  
            <div className="estrella-flash-caja">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
  
            <strong>$100.00</strong>
  
            <div className="boton-flash-caja">
              <button>
                <strong>+</strong>
              </button>
            </div>
          </div>
        </div>
  
        <div className="caja-flash">
          <div className="descuento-flash">
            <p>50% off</p>
          </div>
  
          <div className="imagen-flash-caja">
            <img src={flash4} />
          </div>
  
          <div className="descripcion-flash-caja">
            <h3>Shoes</h3>
  
            <div className="estrella-flash-caja">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
  
            <strong>$100.00</strong>
  
            <div className="boton-flash-caja">
              <button>
                <strong>+</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flash;
