import React, { useState } from 'react'

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
    <div className='d-flex flex-column mt-4 fs-4 justify-content-center'>
      <div className='d-flex justify-content-center  mb-2'>
      <button type="button" className="btn btn-light" onClick={bajarCantidad}>-</button>
      <div className='contador ms-2 me-2'>{Counter}</div>
      <button type="button" className="btn btn-light " onClick={subirCantidad}>+</button>
      </div>
      <button type="button" className="btn btn-success" onClick={onAdd}>Agregar al carrito</button>
    </div>
  )
}
