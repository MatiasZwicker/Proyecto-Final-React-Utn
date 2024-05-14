import React from "react";
import Header from "../code/Header";
import Footer from "../code/Footer";
import "../style/Inicio.css"
import Carrusel from "../code/Carrusel";

export default function Inicio() {
    return (
        <div>
            <Header />
            <img className="banner-inicio" src="./imagenes/banner.julian.webp" alt="" />
            <Carrusel/>
            <Footer />

        </div>

    )

}