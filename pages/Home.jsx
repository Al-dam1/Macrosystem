import React from "react";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Slider from "../src/components/Slider";
import Banner from "../src/components/Banner";
import Contacto from "./Contacto";
import Articulo from '../src/components/Articulos'
import Ofertas  from "../src/components/Ofertas";
import NotFound from '../src/components/NotFound';
import Inicio from "./Inicio";
import { Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <div>
     
      <Routes>
      <Route path="/" element={<Inicio/>}/>
      <Route path="/productos" element={<Articulo/>}/>
      {/* <Navbar />
      <Slider />
      <Banner />
      <Ofertas/>
      <Articulo/>
      <Contacto/>
      <Footer /> */}
      <Route path='contacto' element={<Contacto/>}/>
      <Route path="*" element={<NotFound/>}/>
      </Routes>
      
    </div>
  );
};

export default Home;
