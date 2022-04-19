import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getItem } from '../../helpers/getItem'
import { ItemDetail } from '../ItemDetail/ItemDetail'

export const ItemDetailContainer = ({ items }) => {


    const [actualItem, setActualItem] = useState({})
    const { itemId } = useParams()

    useEffect(() => {
        getItem(itemId).then((resp) => {
            setTimeout(() => {
                items.forEach(item => {
                    if (item.id == itemId) 
                        setActualItem(item)
                })
            })
        }, 2000)
            .catch((err) => {
                console.log(err)
            })
    }, [itemId])

    return (

        <ItemDetail item={actualItem} />

    )
}


