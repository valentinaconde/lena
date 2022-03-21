import React, { useState } from 'react'

export const ItemCount = ({stock,initial,onAdd}) => {

  const [Counter, setCounter] = useState(initial)

  const subirCantidad = () => {
    if(Counter < stock){
      setCounter(Counter + 1)
      onAdd(Counter + 1)
    }
  }

  const bajarCantidad = () => {
    if(Counter > 0){
      setCounter(Counter - 1)
      onAdd(Counter + 1)
    }
  }

  
  
  return (
    <div className='d-flex m-4 fs-4 justify-content-center'>
      <button type="button" class="btn btn-light ms-2" onClick={bajarCantidad}>-</button>
      <div className='contador ms-3'>{Counter}</div>
      <button type="button" class="btn btn-light ms-2" onClick={subirCantidad}>+</button>
    </div>
  )
}
