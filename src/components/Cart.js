import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import '../styles/CarritoCompras.css'

export const Cart = () => {

    let { carrito, removeItem, clear, total } = useContext(CartContext)

    return (
        <div>
            {
                carrito.length > 0 ?
                    <div className='boxCarrito d-flex flex-column'>
                        <h2 className='greeting mt-5 mb-4'>CARRITO DE COMPRAS</h2>

                        {
                            carrito.map(item => {
                                return <div className='boxItem' key={item.id}>
                                    <img src={item.imageURL} className="cartItemImage" alt="" />
                                    <p>{item.title}</p>
                                    <p>{item.cantidad} x $ {item.price} = $ {item.cantidad * item.price}</p>


                                    <button type="button" className="removeButton" onClick={() => {
                                        removeItem(item.id)
                                    }}>Remover</button>

                                </div>
                            }
                            )}

                        <button type="button" className="clearButton" onClick={clear}>Vaciar carrito</button>
                        <Link to="/checkout" type="button" className="finishButton">Finalizar compra</Link>

                        <div className='subtotalBox'>
                            <p>Subtotal</p>
                            <p>${total}</p>
                        </div>

                    </div>

                    : <div>
                        <h2 className='greeting mt-5 mb-4'>CARRITO DE COMPRAS</h2>
                        <p className='greeting mt-5 mb-4'>No hay productos en el carrito</p>
                        <Link className='greeting mt-5 mb-4' to='/'>Volver al incio</Link>
                    </div>
            }
        </div>


    )
}
