import React from 'react'
import '../styles/NavBar.css';
import logo from '../multimedia/logo.png'
import { CartWidget } from './CartWidget';
import { categorias } from '../helpers/Strings';

export const NavBar = () => {


  return (<div className="navBar">
    <a href="#"><img src={logo} className="imagenLogo" alt="..." /></a>
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="...navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">INICIO</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                PRODUCTOS
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                {/* ayuda, no me funciona */}
                {categorias.map(category => <li><a className="dropdown-item" href="#">{category}</a></li>)}
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">CONTACTO</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><CartWidget /></a>
            </li>
          </ul>
        </div>
      </div>

    </nav>


  </div>
  )
}
