import React from 'react'
// import { ItemCount } from './ItemCount'
// import image from '../multimedia/image.png'
import { Link } from 'react-router-dom'
import '../styles/Items.css'



export const Item = ({ item }) => {


    return (
        <div key={item.id} className="productCard">
            <img src={item.imageURL} className="card-img-top" alt="..." />
            <div className="card-body d-flex flex-column align-items-center">
                <p className="card-title">{item.title}</p>
                <p className="card-subtitle mb-2 text-muted ">$ {item.price}</p>
                <Link to={`/item/${item.id}`} className="informationButton">Mas informacion</Link>
            </div>
        </div>
    )
}









