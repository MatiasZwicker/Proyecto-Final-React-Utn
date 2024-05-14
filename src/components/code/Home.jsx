import React from "react";
import { NavLink } from "react-router-dom";



export default function Home(){
    return(
      
            <div>
                <h1 className="reg-exi">
                    ¡Usted inicio sesión exitosamente!
                </h1>
                <img className="img-messi" src="./imagenes/bannerr.webp" alt="" />
                <NavLink className="prodd"  to="/productos">CATALOGO</NavLink>
             
            </div>
       

    )
}