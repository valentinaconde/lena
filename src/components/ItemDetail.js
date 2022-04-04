import React, { useState } from 'react'
import { ItemCount } from './ItemCount'
import '../styles/ItemDetail.css'
// import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'


export const ItemDetail = ({ item }) => {
    const Swal = require('sweetalert2')


    function onAdd() {

        console.log(Counter)
        console.log(item)

        Swal.fire({
            icon: 'success',
            title: `${Counter} producto(s) agregado(s) al carrito correctamente`,
            showConfirmButton: true,
            timer: 1500
        })


    }

    const [Counter, setCounter] = useState(1)

    return (
        <div className='boxDetail'>
            <img src={item.imageURL} className="imageDetail " alt="" />
            <div className="descriptionBox">
                <p className='titleDetail'>{item.title}</p>
                <p className='priceDetail'>$ {item.price}</p>
                <p className='descriptionDetail'>{item.description}</p>
                <ItemCount stock={item.stock} onAdd={onAdd} Counter={Counter} setCounter={setCounter}/>
            </div>
        </div>
    )
}
