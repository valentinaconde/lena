import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getItem } from '../helpers/getItem'
import {ItemDetail} from './ItemDetail'

export const ItemDetailContainer = ({items}) => {
    

    const [actualItem, setActualItem] = useState({})
    const {itemId} = useParams()

    useEffect(() => {
        getItem(itemId).then((resp) => {
            setTimeout(() => {
                //ayuda, no me funciona esta parte.
                setActualItem(items.filter(item => item.id === resp))
            })
        }, 2000)
            .catch((err) => {
                console.log(err)
            })
    },)

    return (
        
        <ItemDetail item={actualItem}/>
        
    )
}


