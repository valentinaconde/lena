import React from 'react'
import './ItemCount.css'

export const ItemCount = ({stock,onAdd,Counter,setCounter}) => {


  const subirCantidad = () => {
    if(Counter < stock){
      setCounter(Counter + 1)
    }
  }

  const bajarCantidad = () => {
    if(Counter > 0){
      setCounter(Counter - 1)
    }
  }


  
  return (
    <div className='buttonsBox'>
      <div className='counterBox '>
      <button type="button" className="countButton" onClick={bajarCantidad} disabled={Counter === 0 ? true : false}>-</button> 
      <div className='contador ms-2 me-2'>{Counter}</div>
      <button type="button" className="countButton " onClick={subirCantidad} disabled={Counter === stock ? true : false }>+</button>
      </div>
      <button type="button" className="addButton" onClick={onAdd}>Agregar al carrito</button>
    </div>
  )
}
