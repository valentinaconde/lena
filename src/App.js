// import logo from './logo.svg';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
// import productos from './components/productos.json'
import { Inicio } from './components/Inicio/Inicio';
import { Cart } from './components/Cart/Cart';
import { useEffect, useState } from 'react';
import { CartContext } from './context/CartContext';
import 'bootswatch/dist/minty/bootstrap.min.css'
import { Contacto } from './components/Contacto/Contacto';
import { Footer } from './components/Footer/Footer';

import { collection, getDocs } from 'firebase/firestore'
import { db } from './firebase/config'
import { Checkout } from './components/Checkout/Checkout';
import { Loading } from './components/Loading/Loading';




function App() {

  const productosRef = collection(db, 'productos')
  const [itemsState, setItemsState] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // setLoading(true)
    getDocs(productosRef)
      .then(resp => {
        const itemsData = resp.docs.map(doc => doc.data())
        setItemsState(itemsData)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [productosRef])


  const addItem = (item, cant) => {

    if (isInCart(item.id)) {
      let index = carrito.findIndex(it => it.id == item.id)
      carrito[index].cantidad += cant
    }

    else {
      setCarrito([...carrito, item])
    }
  }

  const clear = () => {
    setCarrito([])
  }

  const isInCart = (id) => {
    return carrito.some(item => item.id === id)
  }

  const removeItem = (id) => {
    setCarrito(carrito.filter(item => item.id !== id))
  }

  const cantidadItemsCart = () => {
    return carrito.reduce((acc, item) => acc += item.cantidad, 0)
  }

  const [carrito, setCarrito] = useState([])

  const total = () => {
    return carrito.reduce((acc, item) => acc + (item.price * item.cantidad), 0)
  }

  return (

    <>
      {
        loading ?
          <Loading />
          :
          <CartContext.Provider value={{ carrito, addItem, removeItem, clear, cantidadItemsCart, total }}>


            <BrowserRouter>

              <NavBar />


              <Routes>

                <Route path="/" element={<Inicio />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/category/:categoryId" element={<ItemListContainer />} />
                <Route path="/item/:itemId" element={<ItemDetailContainer items={itemsState} />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />

                <Route path="*" element={<h1>Pagina inexistente</h1>} />

              </Routes>

              <Footer />


            </BrowserRouter>
          </CartContext.Provider>

      }
    </>




  )
}

export default App;


