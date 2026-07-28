import React from "react";
import { User, ShoppingCart } from "lucide-react";
import Logo from "../../src/assets/canvas.png";
import Mouse from "../../src/assets/mouse1.png";
const Navbar = () => {
  return (
    <header>
      <div className="contenedor">
        <div className="contenido">
          <img
            src={Logo}
            alt="logo de macrosystem"
            width={"200px"}
            height={"100px"}
          />
          <nav>
            <ul>
              <li className="active">Inicio</li>
              <li>
                <a>Productos</a>
              </li>
              <li>
                <a>Contacto</a>
              </li>
              <li>
                <a>Politicas de devolucion</a>
              </li>
              <li>
                <a>Politicas de envio</a>
              </li>
            </ul>
          </nav>
          <div className="contenido-users">
            <div className="user">
              <User color="#c0bfbc" />
              <span className="label">Mi cuenta</span>
            </div>
            <div className="cart">
              <ShoppingCart color="#c0bfbc" />
              <span className="label">Carrito</span>
            </div>
          </div>
        </div>
      </div>

      <article className="flex flex-col items-center w-full px-4 py-8 mx-auto mt-8 mb-16 sm:flex-row sm:justify-between sm:items-start">
        <div className="oferta sm:text-left" >
          <span className="oferta-span">Oferta del dia!</span>
          <h2 className="oferta-h2">Mouse Gamer Rgb</h2>
          <p className="oferta-description">
            Precisión milimétrica y estilo gamer. Con iluminación RGB
            personalizable, diseño ergonómico y botones programables, este mouse
            te da ventaja en cada partida.
          </p>
          <a className="oferta-btn " href="#">
            Comprar
          </a>
        </div>
        <div className="oferta-img">
          {" "}
          <img src={Mouse} width={"100%"} height={"auto"} className="object-contain w-full h-64 " />
        </div>
      </article>
    </header>
  );
};

export default Navbar;
