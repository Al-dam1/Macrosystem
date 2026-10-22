import { useState } from "react";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
const Contacto = () => {
  const [Nombre, setNombre] = useState("");
  const [Email, setEmail] = useState("");
  const [Telefono, setTelefono] = useState("");

  return (<>
    <Navbar/>
    <section className="flex-row justify-around p-4 md:flex fondo-tecnologico">
      <aside className="flex flex-col gap-4 p-4 mb-4 text-white bg-black rounded-lg md:mb-0w-full">
        <h3 className="font-bold text-center">Datos de contacto</h3>
        <p>📞 Teléfono: 4755-0258</p>
        <p>📱 WhatsApp: 11-3492-6049</p>
        <p>📧 Email: macrosystemsm@gmail.com</p>
        <p>📍 Dirección: Moreno 3755, Buenos Aires</p>
      </aside>
      <form className="flex flex-col justify-center w-full gap-12 p-4 text-white bg-black not-only:not-odd: rounded-lg shadow-md md:w-1/2 "> 
        <input
          type="text"
          nombre={Nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Ingresa tu nombre"></input>
        <input
          type="email"
          email={Email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="macrosystem@gmail.com"></input>
        <input
          type="tel"
          telefono={Telefono}
          onChange={(e) => setTelefono(e.target.value)}
          placeholder="4755-0258"></input>
          <textarea placeholder="Ingresa tu mensaje"></textarea>
        <button type="submit"
        className="w-full py-2 text-white rounded bg-green-950 hover:bg-green-700"
        >Enviar</button>
      </form>
    </section>
    <Footer/>
    </>
  );
};

export default Contacto;