import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'



export const Item = ({ item }) => {


    return (
        <div key={item.id} className="productCard">
            <img src={item.imageURL} className="card-img-top" alt="..." />
            <div className="card-body d-flex flex-column align-items-center">
                <p className="card-title">{item.title}</p>
                <p className="card-subtitle mb-2 text-muted ">$ {item.price}</p>
                <Link to={`/item/${item.id}`} className="informationButton">Mas informacion</Link>
                <p className={item.stock === 0 ? "greeting mt-2 mb-0" : "d-none"}>Producto sin stock</p>
            </div>
        </div>
    )
}









