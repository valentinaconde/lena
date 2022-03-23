import React from 'react'
import { ItemCount } from './ItemCount'
import { ItemList } from './ItemList'

export const ItemListContainer = ({greeting}) => {
    
    //prueba
    let items = [
        {
            id : 1,
            title : 'mantel blanco',
            price: 100,
            imageURL: 'imageURL'
        },
        {
            id : 2,
            title : 'mantel negro',
            price: 200,
            imageURL: 'imageURL'
        },
        {
            id : 3,
            title : 'mantel rojo',
            price: 300,
            imageURL: 'imageURL'
        }
    ]
    //
    
    
    return (

        <h2>{greeting}</h2>,
        <ItemCount stock={10} initial={0} onAdd={(counter) => {
            console.log(counter)
        }}/>,
        <ItemList items={items}/>
    )
}


