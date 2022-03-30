import React from 'react'
import { ItemCount } from './ItemCount'
import image from '../multimedia/image.png'
import { Link } from 'react-router-dom'
import '../styles/Items.css'



export const Item = ({ item }) => {


    const onAdd = (contador) => {
        console.log('Producto agregado')
    }


    return (
        <div key={item.id} className="productCard">
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body d-flex flex-column align-items-center">
                <p className="card-title">{item.title}</p>
                <p className="card-subtitle mb-2 text-muted ">$ {item.price}</p>
                <p className="card-text">{item.description}</p>
                <Link to={`/item/${item.id}`} className="informationButton">Mas informacion</Link>
                <ItemCount stock={item.stock} initial={0} onAdd={onAdd} />
            </div>
        </div>
    )

}









