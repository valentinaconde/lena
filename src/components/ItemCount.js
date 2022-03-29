import React, { useState } from 'react'
import '../styles/Items.css'

export const ItemCount = ({stock,initial,onAdd}) => {

  const [Counter, setCounter] = useState(initial)

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
    <div className='d-flex flex-column mt-2 fs-4 justify-content-center'>
      <div className='d-flex justify-content-center  mb-2'>
      <button type="button" className="btn countButton" onClick={bajarCantidad}>-</button>
      <div className='contador ms-2 me-2'>{Counter}</div>
      <button type="button" className="btn countButton " onClick={subirCantidad}>+</button>
      </div>
      <button type="button" className="btn addButton" onClick={onAdd}>Agregar al carrito</button>
    </div>
  )
}
