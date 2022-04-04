import React from 'react'
import { ItemCount } from './ItemCount'
import '../styles/ItemDetail.css'
// import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'


export const ItemDetail = ({ item }) => {
    const Swal = require('sweetalert2')
    let cantidadAgregada = 0


    const onAdd = (cantidadAgregada) => {

        Swal.fire({
            icon: 'success',
            title: 'Producto agregado correctamente',
            showConfirmButton: true,
            timer: 1100
        })

        // const itemAdd = {
        //     id,
        //     title,
        //     price,
        //     imageURL,
        //     stock,
        //     categoria,
        //     descripcion
        // }

        // console.log(itemAdd)

    }


    return (
        <div className='boxDetail'>
            <img src={item.imageURL} className="imageDetail " alt="" />
            <div className="descriptionBox">
                <p className='titleDetail'>{item.title}</p>
                <p className='priceDetail'>$ {item.price}</p>
                <p className='descriptionDetail'>{item.description}</p>
                <ItemCount stock={item.stock} onAdd={onAdd}/>
            </div>
        </div>
    )
}
