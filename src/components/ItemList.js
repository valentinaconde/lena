import React, { useEffect, useState } from 'react'
import { Item } from './Item'
import '../styles/Items.css'


export const ItemList = ({items, category}) => {

    
    const [itemsState, setItemsState] = useState([]);


    let promesa = new Promise((resolve, reject) => {
        if (true) {
            resolve(items)
        }
        else {
            reject('No funciona el itemList')
        }
    })
    
    
    
    useEffect(() => {
        promesa.then((resp) => {
            setTimeout(() => {
                if(category){
                    setItemsState(resp.filter(item => item.categoria === category))
                }
                else{
                    setItemsState(resp)
                }
            })
        }, 2000)
            .catch((err) => {
                console.log(err)
            })
    })


    return (
        
        <div className='productCards'>
            {itemsState.map(it => <Item item={it} key={it.id}/>)}
        </div>
    )



}


