import React from "react";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Slider from "../src/components/Slider";
import Banner from "../src/components/Banner";
import Contacto from "./Contacto";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Banner />
      <Contacto/>
      <button className="p-10 text-center bg-red-700 g-20">
        twliwnd css funcionando
      </button>

      <Footer />
    </div>
  );
};

export default Home;
