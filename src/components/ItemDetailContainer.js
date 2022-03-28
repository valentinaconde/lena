import React, { useEffect, useState } from 'react'
import { getItem } from '../helpers/getItem'
import {ItemDetail} from './ItemDetail'

export const ItemDetailContainer = () => {
    
    
    console.log('itemdetailcontainer')

    const [item, setItem] = useState({})

    useEffect(() => {
        getItem().then((resp) => {
            setTimeout(() => {

                setItem(resp)
            })
        }, 2000)
            .catch((err) => {
                console.log(err)
            })
    },)


    return (
        <ItemDetail item={item}/>
        
    )
}
