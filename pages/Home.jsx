import React from "react";
import { useState } from "react";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Slider from "../src/components/Slider";
import Banner from "../src/components/Banner";
import Articulo from '../src/components/Articulos'
import Ofertas  from "../src/components/Ofertas";
import NotFound from '../src/components/NotFound';
import Inicio from "./Inicio";
import Contacto from '../pages/Contacto'
import Cone from '../pages/Conectividad'
import Login from "./Login";

import { Routes, Route } from "react-router-dom";
import Conectividad from "./Conectividad";
import PoliticaDevo from "./PoliticaDevo";
import PoliticaEnvio from "./PoliticaEnvio";
import DetalleProduct from "./DetalleProduct";
import Productos from '../data/products.json'
import Admin from "./Admin";
import RutasProtegidas from '../src/auth/RutasProtegidas'

const Home = () => {
  const [isAuthenticated, setIsAuth] = useState(true)
  return (
    <div>
     
      <Routes>
      <Route path="/" element={<Inicio/>}/>
      <Route path="/productos" element={<Articulo/>}/>
    
      <Route path="/conectividad" element={<Conectividad/>}/>
      <Route path="/contacto" element={<Contacto/>}/>
      <Route path="/politicaEnvio" element={<PoliticaEnvio/>}/>
      <Route path="/politicaDevolucion" element={<PoliticaDevo/>}/>
      <Route path="/productos/:id" element={<DetalleProduct productos = {Productos} />}/>
      <Route path="/admin" element={<RutasProtegidas isAuthenticate={isAuthenticated}> <Admin/> </RutasProtegidas>}/>
    <Route path="/login" element={<Login/>}/>
      <Route path="*" element={<NotFound/>}/>
      </Routes>
      
    </div>
  );
};

export default Home;
