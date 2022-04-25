import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getItem } from '../../helpers/getItem'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { Loading } from '../Loading/Loading'

export const ItemDetailContainer = ({ items }) => {


    const [actualItem, setActualItem] = useState({})
    const [loading, setLoading] = useState(false)
    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)
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
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])


    return (
        <>
            {
                loading ?
                    <Loading/>
                    :
                    <ItemDetail item={actualItem} />
            }
        </>





    )
}


