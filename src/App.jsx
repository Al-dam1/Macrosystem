import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Botones from './components/Botones'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Botones texto='aceptar' color='blue'/>
      <Botones texto='cancelar' color='red'/>
      <Botones texto='ver mas' color='green'/>
      <Footer/>
    </>
  )
}

export default App
