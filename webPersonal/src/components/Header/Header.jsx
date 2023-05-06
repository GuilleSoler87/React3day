import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="header-container">
        <h1 className="header-title">Mi página personal</h1>
        <nav className="header-nav">
          <NavLink exact="true" to="/" className="header-nav-link">Inicio</NavLink>
          <NavLink to="/about" className="header-nav-link">About</NavLink>
          <NavLink to="/contact" className="header-nav-link">Contacto</NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;


