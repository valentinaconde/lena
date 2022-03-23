import React from 'react'



export const Item = ({item}) => {
    return (
        <div class="card">
            <img src={item.imageURL} class="card-img-top" alt="..." />
            <div class="card-body d-flex flex-column align-items-center">
                <h5 class="card-title">{item.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted ">$ {item.price}</h6>
                <p class="card-text">{item.description}</p>
                <a href="#" class="btn btn-outline-success">Mas informacion</a>
            </div>
        </div>
    )
}



