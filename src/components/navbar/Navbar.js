import React from "react";
import Header from "../header/Header";
import logo from "../../images/logo.svg";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container-Header-inNavbar">
        <Header />
      </div>
      
      <div className="containerBox">
        <div className="search-Navbar">
          <div className="logo">
           <img src={logo}/>
          </div>

          <div className="buscador">
            <div>
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search" />
            <button>All Category</button>
            </div>
          </div>

          <div className="userEstado">
          <i class="fa-solid fa-user"></i>
          <i class="fa-solid fa-cart-shopping"></i>
          </div>
        </div>
      
        <nav className="nav">
          <div>
            <select>
              <option>Categoria</option>
              <option><div><i class="fa-solid fa-shirt-long-sleeve"></i>Fashion</div></option>
              <option>Electronic</option>
              <option>Cars</option>
              <option>Home y Garden</option>
              <option>Gifts</option>
              <option>Music</option>
              <option>Health and Beauty</option>
            </select>
          </div>

          <ul>
            <li>Home</li>
            <li>Pages</li>
            <li>User Account</li>
            <li>Vendor Account</li>
            <li>Track My Order</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
