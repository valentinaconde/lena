import React, {useContext, useState } from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { CartContext } from '../../context/CartContext'


export const ItemDetail = ({ item }) => {
    const Swal = require('sweetalert2')

    const { addItem } = useContext(CartContext)

    const [Counter, setCounter] = useState(1)


    function onAdd() {

        Swal.fire({
            icon: 'success',
            title: `${Counter} producto(s) agregado(s) al carrito correctamente`,
            showConfirmButton: true,
            timer: 1500
        })



        const itemToAdd = {
            id: item.id,
            title: item.title,
            price: item.price,
            imageURL: item.imageURL,
            cantidad: Counter
        }

        addItem(itemToAdd, Counter)

    }


    return (
        <div className='boxDetail'>
            <img src={item.imageURL} className="imageDetail " alt="" />
            <div className="descriptionBox">
                <p className='titleDetail'>{item.title}</p>
                <p className='priceDetail'>$ {item.price}</p>
                <p className='descriptionDetail'>{item.description}</p>
                <p className={item.stock === 0 ? "btn btn-danger disabled greeting" : "d-none"}>Producto sin stock</p>
                <div className={item.stock === 0 ? "d-none" : undefined}>
                    <ItemCount stock={item.stock} onAdd={onAdd} Counter={Counter} setCounter={setCounter} />
                </div>
            </div>
        </div>
    )
}
