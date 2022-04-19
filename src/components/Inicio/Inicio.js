import React from 'react'
import { Carrusel } from '../Carrusel/Carrusel'
import { ItemListContainer } from '../ItemListContainer/ItemListContainer'

export const Inicio = () => {
    return (
        <>
            <Carrusel/>
            <ItemListContainer greeting={'Todos nuestros productos'}/>
        </>
    )
}
