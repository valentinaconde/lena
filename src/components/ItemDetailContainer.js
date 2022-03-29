import React, { useEffect, useState } from 'react'
import { getItem } from '../helpers/getItem'
import {ItemDetail} from './ItemDetail'

export const ItemDetailContainer = ({item}) => {
    

    const [actualItem, setActualItem] = useState({})

    useEffect(() => {
        getItem(item).then((resp) => {
            setTimeout(() => {

                setActualItem(resp)
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


