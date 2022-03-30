import React from 'react'
import { useParams } from 'react-router-dom'
import { ItemList } from './ItemList'
import productos from './productos.json'

export const ItemListContainer = ({greeting}) => {
        
    const {categoryId} = useParams()

    return (

        <div className='mt-5'>
        <h2 className='d-flex justify-content-center'>{greeting}</h2>
        <ItemList items={productos} category={categoryId}/>
        </div>
    )
}


