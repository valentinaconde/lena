import React from 'react'
import image from '../multimedia/image.png'

export const ItemDetail = ({ item }) => {

    // prueba
    let itemm = {
        title: 'Producto 1',
        price: '$100',
        description: 'Manteles de madera',
    }

    return (
        <div className='d-flex'>
            <img src={image} className="img-fluid border border-light " alt="" />
            <div className="descriptionBox">
                <h2>{itemm.title}</h2>
                <h3>{itemm.price}</h3>
                <p>{itemm.description}</p>
            </div>
        </div>
    )
}
