import React from "react";
import '../style/Footer.css';

export default function Footer() {
    return (

        <section className="footer">
            <div className="center-logo">
                <img className="logo-footer" src="./imagenes/logo.png" alt="logo" width={100} />
            </div>
            <div className="redes-contenedor">
                <p></p>
                <a href=" "><img className="foto" src="./imagenes/inst.png" alt="" /></a>
                <a href=" "><img className="foto" src="./imagenes/twt.png" alt="" /></a>
                <a href=" "><img className="foto" src="./imagenes/faceb.png" alt=""  /></a>
            </div>
        </section>
    );
}