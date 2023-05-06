import React from "react";
import HomeWallp from "../../assets/LOGO.png";
import "./Home.css";

const Home = () => {
    return (
        <div className="imgHome">
            <img src={HomeWallp} alt="Imagen de inicio" className="Home-image" />
        </div>

    );
};

export default Home;
