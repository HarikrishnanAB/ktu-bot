// File: src/components/Header/Header.jsx
import React from "react";
import logo from "../../assets/botLogo.png";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="KTU Companion Logo" className="logo" />
      <h1>KTU Companion</h1>
    </header>
  );
};

export default Header;
