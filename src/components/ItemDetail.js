import React from 'react'
import image from '../multimedia/image.png'

export const ItemDetail = ({ item }) => {

  

    return (
        <div className='d-flex'>
            <img src={image} className="img-fluid border border-light " alt="" />
            <div className="descriptionBox">
                <h2>{item.title}</h2>
                <h3>{item.price}</h3>
                <p>{item.description}</p>
            </div>
        </div>
    )
}
