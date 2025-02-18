
import React from "react";
import logo from "../../assets/botLogo.png";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="KTU Companion Logo" className="logo" />
        <h1>KTU Companion</h1>
      </div>
      <nav className="header__nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
