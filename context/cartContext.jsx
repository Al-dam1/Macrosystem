import { createContext, useState, useEffect } from "react";

export const cartContext = createContext();

export const CartProvider = ({ children }) => {
  const [isAuthenticated, setIsAuth] = useState(false);
  const [cart, setCart] = useState([])
  const [productos, setProductos ] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(false)

  useEffect(()=>{
    fetch('/data/products.json')
    .then(respuesta => respuesta.json())
    .then(datos => {
      setTimeout(()=>{
        setProductos(datos)
        setCargando(false)
      },1000)
    }, [])
    .catch(error =>{
      console.log('error', error);
      setCargando(false)
      setError(true)
    })
  })


  return (
    <cartContext.Provider value={{ isAuthenticated, setIsAuth, cart, productos,error, cargando }}>
      {children}
    </cartContext.Provider>
  );
};