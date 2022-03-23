import React, { useEffect } from 'react'
import { Item } from './Item'

export const ItemList = ({ items }) => {

    let promesa = new Promise((resolve, reject) => {
        if (true) {
            resolve('funciona')
        }
        else {
            reject('hay un error')
        }
    })

    useEffect(() => {
        promesa.then((resp) => {

            setTimeout(() => {
                items.forEach(item => {
                    //ayuda, no me funciona
                    <Item item={item} />
                })
            }, 2000)
        }).catch((err) => {
            console.log(err)
        })
    }, [items])





    return (
        //ayuda, no se donde debe ir el return
        <p>return</p>
    )



}


