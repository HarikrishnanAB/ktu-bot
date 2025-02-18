import React from "react";
import logo from "../../assets/botLogo.png";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__left">
          <img src={logo} alt="KTU Companion Logo" className="logo" />
          <div className="header__text">
            <h1>KTU Companion</h1>
            <p className="header__quote">"Your Academic Assistant, Anytime!"</p>
          </div>
        </div>
        <nav className="header__nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
