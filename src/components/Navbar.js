import React from "react";
import BurgerLogo from "../assets/burgerlogo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="main">
        <img src={BurgerLogo} />
        <div>
          <Link to="/">Anasayfa</Link>
          <Link to="/menu">Menü</Link>
          <Link to="/about">Hakkımız</Link>
          <Link to="/contact">İletişim</Link>
        </div>
      </div>
    </div>
  );
};
