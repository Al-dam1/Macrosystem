import React, { useState } from "react";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";

const [nombre, setNombre] = useState("");
function manejarEnvio(evento) {
  evento.preventDefault();
  alert(`formulario enviado por ${nombre}`);
}
const [correo, setCorreo] = useState('');
const [numero, setNumero] = useState('');
const [mensaje, setMensaje] = useState('')
const Contacto = () => {
  return (
    <div>
      <Navbar />
      <section>
        <article>
          <h2>Ponte en contacto</h2>
          <p>lorem jasdnjad</p>
          <div>
            <div>icono</div>
            <div>
              <span>whatsahp</span>
              <h3>21312033</h3>
            </div>
            <div>icono</div>
            <div>
              <span>telefono</span>
              <h3>21312033</h3>
            </div>
            <div>icono</div>
            <div>
              <span>email</span>
              <h3>21312033</h3>
            </div>
            <div>icono</div>
            <div>
              <span>ubicacion</span>
              <h3>21312033</h3>
            </div>
          </div>
        </article>
        <article>
          <form onSubmit={manejarEnvio}>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ingresa tu nombre"
            />
            <input
              type="text"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              placeholder="correo@ejemplo.com"
            />
            <input
              type="number"
              value={numero}
              onChange={(e) => setCorreo(e.target.value)}
              placeholder="Numero de contacto"
            />
            <input
              type="text"
              value={mensaje}
              onChange={(e) => setCorreo(e.target.value)}
              placeholder="¿En que podemos ayudarte?"
            />
            <button type="submit"> Enviar formulario</button>
          </form>
        </article>
      </section>
      <Footer />
    </div>
  );
};

export default Contacto;
