import { addDoc, collection } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { db } from '../firebase/config'

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
                clear()

            })

    }

    const handleInputChange = (e) => {
        e.preventDefault()

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }


    if(orderId){
        return <div>
            <h2 className='greeting'>Tu orden ha sido realizada con exito</h2>
            <h3 className='greeting'>Tu orden es la siguiente: {orderId}</h3>
            <Link className='greeting mt-5 mb-4' to='/'>Volver al incio</Link>
            </div>
    }

    if(carrito.length === 0 || total === 0) {
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
                    value={values.numero}
                    name='numero'
                    onChange={handleInputChange}
                    required={true}
                />

                <button type="submit" className="mt-3 checkoutButton" onSubmit={handleSubmit}>Finalizar Compra</button>
            </form>
        </div>
    )
}
