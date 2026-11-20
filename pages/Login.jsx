import React, { useContext } from 'react'
import { cartContext } from '../context/cartContext'
const Login = () => {
  const {setIsAuth} = useContext(cartContext);
  return (
    <div>
      <h1 className='flex items-center text-amber-600 text-center text-3xl'>Login</h1>
      <button onClick={() => setIsAuth(true)}>
        Iniciar sesión
      </button>
    </div>
  )
}

export default Login
