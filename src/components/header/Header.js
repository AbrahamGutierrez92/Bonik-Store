import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">

      <div className="ayuda-header .desactivado">
        <div className="del-Header">
          <i className="fa-solid fa-phone"></i>
          <p>+505 2222-88888</p>
        </div>

        <div className="del-Header">
          <i className="fa-solid fa-envelope"></i>
          <p>bonik@store.com</p>
        </div>
      </div>

      <div className="ayuda-header">
        <div>
            Theme FaQ's
        </div>

        <div>
            Need Help?
        </div>

        <div className="idiomas">
            <i className="fa-solid fa-earth-americas"></i>
            EN
        </div>

        <div className="signoCambio">
        <i className="fa-solid fa-dollar-sign"></i>
            USD
        </div>
      </div>
    </div>
  );
};

export default Header;
