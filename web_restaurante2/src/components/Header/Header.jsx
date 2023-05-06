import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";


function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <h1 className="header__logo">Restaurante 3 Platos</h1>
                <nav className="header__nav">
                    <NavLink exact="true" to="/" className="header-nav-link">Inicio</NavLink>
                    <NavLink to="/Carta" className="header-nav-link">Carta</NavLink>
                    <NavLink to="/Reservas" className="header-nav-link">Reservas</NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;
