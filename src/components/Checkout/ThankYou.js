import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

export const ThankYou = ({orderId}) => {

    const { carrito, total, clear } = useContext(CartContext)

    return (
        <>

            <div className='d-flex flex-column justify-content-center align-items-center mt-5'>

                <h2 className='greeting'>Gracias por tu compra</h2>
                <h2 className='greeting'>Tu orden ha sido realizada con éxito!</h2>
                <h3 className='greeting'>Tu orden es la siguiente: </h3>
                <h5 className='border p-2'>{orderId}</h5>
                <h6 className='greeting'>Guardá el número en un lugar seguro ya que al salir de la página se eliminará</h6>

                <div className='mt-5'>
                    {
                        carrito.map(item => {
                            return <div className='boxItem' key={item.id}>
                                <img src={item.imageURL} className="cartItemImage" alt="" />
                                <p>{item.title}</p>
                                <p>{item.cantidad} x $ {item.price} = $ {item.cantidad * item.price}</p>
                            </div>

                        })
                    }
                </div>
                <h4 className='greeting fw-bold mt-2'>Total: $ {total()}</h4>
                <h5 className='greeting mt-4'>Te contactaremos cuando la orden este lista! </h5>


                <Link to='/' className='greeting mt-3 mb-4' onClick={clear}>Volver al incio</Link>
            </div>

        </>
    )
}
