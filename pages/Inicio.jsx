import React from 'react'
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Slider from "../src/components/Slider";
import Banner from "../src/components/Banner";
import Articulo from '../src/components/Articulos';
import Ofertas  from "../src/components/Ofertas";
import OfertaDia from '../src/components/OfertaDia';
const Inicio = () => {
  return (
    <>
      <Navbar/>
      <OfertaDia/>
      <Slider/>
      <Banner />
      <Ofertas/>
      <Articulo/>
      <Footer />
    </>
  )
}

export default Inicio
