import React from 'react'
import { useParams } from 'react-router-dom'
import { ItemList } from './ItemList'
import productos from './productos.json'
import '../styles/Items.css'


export const ItemListContainer = ({greeting}) => {
        
    const {categoryId} = useParams()
    if(!greeting){
        greeting = categoryId
    }

    return (

        <div className='mt-5'>
        <h2 className='greeting'>{greeting}</h2>
        <ItemList items={productos} category={categoryId}/>
        </div>
    )
}


