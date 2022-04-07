import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

export const CartWidget = () => {

    const { cantidadItemsCart } = useContext(CartContext)

    return (
        <Link to="/cart" className="nav-link" >
            <i className="bi bi-cart"></i>
            <span>{cantidadItemsCart()}</span>
        </Link>
    )
}
