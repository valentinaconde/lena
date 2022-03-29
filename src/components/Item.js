import React from 'react'
import { ItemCount } from './ItemCount'
import image from '../multimedia/image.png'
import { ItemDetailContainer } from './ItemDetailContainer'



export const Item = ({ item }) => {


    const onAdd = (contador) => {
        console.log('Producto agregado')
    }

    const Detail = () => {
        <ItemDetailContainer/>
    }

    return (
        <div key={item.id} className="card">
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body d-flex flex-column align-items-center">
                <h5 className="card-title">{item.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted ">$ {item.price}</h6>
                <p className="card-text">{item.description}</p>
                <button className="btn btn-outline-success" onClick={Detail}>Mas informacion</button>
                <ItemCount stock={item.stock} initial={0} onAdd={onAdd} />
            </div>
        </div>
    )

}









