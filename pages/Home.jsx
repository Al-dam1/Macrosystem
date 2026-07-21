import React from 'react'
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
import Slider from '../src/components/Slider'
import Botones from '../src/components/Botones'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Slider/>
       <p className='bg-amber-600 text-aber-500 p-6 border-b-amber-700 gap-5'> clickeame</p>
      <Botones texto='aceptar' color='blue'/>
      <Botones texto='cancelar' color='red'/>
      <Botones texto='ver mas' color='green'/>
     <button className='bg-red-700 p-10 text-center g-20'>twliwnd css funcionando</button>
      <Footer/>
    </div>
  )
}

export default Home
