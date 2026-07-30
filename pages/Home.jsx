import React from 'react'
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
import Slider from '../src/components/Slider'
import Botones from '../src/components/Botones'
import TituloOferta from '../src/components/TituloOferta'
import EncabezadoOferta from '../src/components/EncabezadoOferta'
import Banner from '../src/components/Banner'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <Banner/>
      <TituloOferta texto='Perifericos de elite'/>
       <p className='gap-5 p-6 bg-amber-600 text-aber-500 border-b-amber-700'> clickeame</p>
      <Botones texto='aceptar' color='blue'/>
   <EncabezadoOferta text='PERIFERICOS DE ELITE'/>
      <Botones texto='cancelar' color='red'/>
      <Botones texto='ver mas' color='green'/>
     <button className='p-10 text-center bg-red-700 g-20'>twliwnd css funcionando</button>
      <Footer/>
    </div>
  )
}

export default Home
