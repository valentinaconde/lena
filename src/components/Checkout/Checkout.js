import { addDoc, collection } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { db } from '../../firebase/config'
import './Checkout.css'


export const Checkout = () => {

    const { carrito, total, clear } = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)

    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        telefono: ''
    })


    const handleSubmit = (e) => {
        e.preventDefault()

        const orden = {
            items: carrito,
            total: total(),
            comprador: { ...values }
        }


        const orderRef = collection(db, 'ordenes')
        addDoc(orderRef, orden)
            .then((doc) => {
                setOrderId(doc.id)
            })

    }

    const handleInputChange = (e) => {
        e.preventDefault()

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }


    if (orderId) {

        return <>

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
                <h5 className='greeting mt-4'>Te contactaremos a tu celular cuando la orden este lista! </h5>


                <Link to='/' className='greeting mt-3 mb-4' onClick={clear}>Volver al incio</Link>
            </div>

        </>

    }

    if (carrito.length === 0 || total === 0) {
        return <Navigate to="/" />
    }

    return (
        <div className='checkoutForm'>
            <h2 className='greeting mt-5 mb-4'>CHECKOUT</h2>
            <form onSubmit={handleSubmit} className="formulario">
                <input className='form-control my-2'
                    type={'text'}
                    placeholder='Nombre'
                    value={values.nombre}
                    name='nombre'
                    onChange={handleInputChange}
                    required={true}
                />

                <input className='form-control my-2'
                    type={'text'}
                    placeholder='Apellido'
                    value={values.apellido}
                    name='apellido'
                    onChange={handleInputChange}
                    required={true}
                />

                <input className='form-control my-2'
                    type={'number'}
                    placeholder='Numero de telefono'
                    value={values.telefono}
                    name='telefono'
                    onChange={handleInputChange}
                    required={true}
                />

                <button type="submit" className="mt-3 checkoutButton" onSubmit={handleSubmit}>Finalizar Compra</button>
            </form>
        </div>
    )
}
