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
            <ul className="flex gap-6">
              <li className="active">Inicio</li>
              <li className="relative group">
                <a href="#" className="cursor-pointer">
                  Productos
                </a>
                <ul className="absolute hidden p-2 mt-2 bg-gray-900 group-hover:block">
                  <li>
                    Conectividad
                    <ul className="ml-4">
                      <li>TP-Link</li>
                      <li>Mercusys</li>
                    </ul>
                  </li>
                  <li>Accesorios</li>
                  <li>Impresión</li>
                  <li>
                    Periféricos
                    <ul className="ml-4">
                      <li>Teclados</li>
                      <li>Mouse</li>
                      <li>Combos</li>
                      <li>Parlantes</li>
                    </ul>
                  </li>
                  <li>
                    Componentes de PC
                    <ul className="ml-4">
                      <li>Placas de video</li>
                      <li>Procesadores</li>
                      <li>Discos sólidos</li>
                      <li>Memoria RAM PC</li>
                      <li>Fuentes</li>
                      <li>Motherboards</li>
                      <li>Gabinetes</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Contacto</a>
              </li>
              <li>
                <a href="#">Políticas de devolución</a>
              </li>
              <li>
                <a href="#">Políticas de envío</a>
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

      <article className="flex flex-col items-center w-full mx-auto sm:flex-row sm:justify-between sm:items-start sm:w-full">
        <div className="oferta sm:text-left sm:w-1/2">
          <span className="oferta-span">Oferta del dia!</span>
          <h2 className="oferta-h2">Mouse Gamer Rgb</h2>
          <p className="oferta-description">
            Precisión milimétrica y estilo gamer. Con iluminación RGB
            personalizable, diseño ergonómico y botones programables, este mouse
            te da ventaja en cada partida.
          </p>
          <a className="oferta-btn" href="#">
            Comprar
          </a>
        </div>
        <div className="flex items-center justify-center oferta-img sm:w-1/2">
          <img src={Mouse} className="object-contain w-full h-64 mx-auto" />
        </div>
      </article>
    </header>
  );
};

export default Navbar;
