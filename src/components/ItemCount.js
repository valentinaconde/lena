import React, { useState } from 'react'

export const ItemCount = ({stock,onAdd}) => {

  const [Counter, setCounter] = useState(1)

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
      <button type="button" className="btn countButton" onClick={bajarCantidad}>-</button>
      <div className='contador ms-2 me-2'>{Counter}</div>
      <button type="button" className="btn countButton " onClick={subirCantidad}>+</button>
      </div>
      <button type="button" className="btn addButton" onClick={onAdd}>Agregar al carrito</button>
    </div>
  )
}
