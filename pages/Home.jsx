import React from "react";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Slider from "../src/components/Slider";
import Banner from "../src/components/Banner";
import Contacto from "./Contacto";
import Articulo from '../src/components/Articulos'
import Ofertas  from "../src/components/Ofertas";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Banner />
      <Ofertas/>
      <Articulo/>
      <Contacto/>
      <Footer />
    </div>
  );
};

export default Home;
