import React, { useEffect, useState } from 'react'
import { Item } from './Item'
import '../styles/Items.css'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config'


export const ItemList = ({category }) => {


    const [itemsState, setItemsState] = useState([]);


        // let promesa = new Promise((resolve, reject) => {
        //     if (true) {
        //         resolve(items)
        //     }
        //     else {
        //         reject('No funciona el itemList')
        //     }
        // })

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

    // useEffect(() => {
    //     promesa.then((resp) => {
    //         setTimeout(() => {
    //             if(category){
    //                 setItemsState(resp.filter(item => item.categoria === category))
    //             }
    //             else{
    //                 setItemsState(resp)
    //             }
    //         })
    //     }, 2000)
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // })


    return (

        <div className='productCards'>
            {itemsState.map(it => <Item item={it} key={it.id} />)}
        </div>
    )



}


