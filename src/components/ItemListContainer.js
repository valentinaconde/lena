import React from 'react'
import { ItemCount } from './ItemCount'
import { ItemList } from './ItemList'
import productos from './productos.json'

export const ItemListContainer = ({greeting}) => {
    
    

   
    
    return (

        <>
        <h2>{greeting}</h2>
        <ItemList items={productos}/>
        </>
    )
}


