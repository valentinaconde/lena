import React from 'react'
import { Carrusel } from './Carrusel'
import { ItemListContainer } from './ItemListContainer'

export const Inicio = () => {
    return (
        <>
            <Carrusel/>
            <ItemListContainer greeting={'Todos nuestros productos'}/>
        </>
    )
}
