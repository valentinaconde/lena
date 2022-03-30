import React from 'react'
import '../styles/NavBar.css';
import logo from '../multimedia/logo.png'
import { CartWidget } from './CartWidget';
import { categorias } from '../helpers/Strings';
import { Link } from 'react-router-dom';

export const NavBar = () => {


  return (<div className="navBar">
    <Link to="/"><img src={logo} className="imagenLogo" alt="..."/></Link>
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="...navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="#" className="nav-link active" aria-current="page">INICIO</Link>
            </li>
            <li className="nav-item dropdown">
              <Link to="#" className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                PRODUCTOS
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                {categorias.map(category => <li key={category}><Link to={`/category/${category}`} className="dropdown-item">{category}</Link></li>)}
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/contacto" className="nav-link" >CONTACTO</Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link" ><CartWidget /></Link>
            </li>
          </ul>
        </div>
      </div>

    </nav>


  </div>
  )
}
