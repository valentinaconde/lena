import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'

import { db } from '../../firebase/config'
import { addDoc, collection } from 'firebase/firestore'

import { CartContext } from '../../context/CartContext'
import { ThankYou } from './ThankYou'
import './Checkout.css'


export const Checkout = ({ items }) => {

    const { carrito, total} = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)

    const [values, setValues] = useState({
        nombre: '',
        email: '',
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
        return <ThankYou orderId={orderId}/>
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
                    placeholder='Nombre y Apellido'
                    value={values.nombre}
                    name='nombre'
                    onChange={handleInputChange}
                    required={true}
                />

                <input className='form-control my-2'
                    type={'email'}
                    placeholder='E-mail'
                    value={values.email}
                    name='email'
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
