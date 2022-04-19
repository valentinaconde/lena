import React, { useEffect, useState } from 'react'
import { Item } from '../Item/Item'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/config'


export const ItemList = ({ category }) => {


    const [itemsState, setItemsState] = useState([]);


    useEffect(() => {
        const productosRef = collection(db, 'productos')

        getDocs(productosRef)
            .then(resp => {
                const itemsData = resp.docs.map(doc => doc.data())
                if (category) {
                    setItemsState(itemsData.filter(item => item.categoria === category))
                }
                else {
                    setItemsState(itemsData)
                }
            })
    }, [category])


    return (

        <div className='productCards'>
            {itemsState.map(it => <Item item={it} key={it.id} />)}
        </div>
    )



}


