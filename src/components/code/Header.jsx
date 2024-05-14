
import React from 'react';
import { NavLink } from 'react-router-dom';
import "../style/Header.css";

export default function Header({ }) {
  return (
    <section className="contenedor">

      <div className="links">
        <NavLink className='Link ' activeClassName='active' to="/">Home</NavLink>
        <NavLink className='Link ' activeClassName='active' to="/productos">Productos</NavLink> 
      </div>
      <div>
        <img className="logo" src="./imagenes/logo.png" alt="" />
      </div>
      <div className='sesion-link'>
        <NavLink className='sesion-L' to="/register"> Iniciar Sesión </NavLink>
      </div>
      
    </section>
  );
}