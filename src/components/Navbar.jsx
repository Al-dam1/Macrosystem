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

  <article className="flex flex-col items-center w-full mx-auto sm:flex-row sm:justify-between sm:items-start">
  <div className="oferta sm:text-left sm:w-1/2">
    <span className="oferta-span">Oferta del dia!</span>
    <h2 className="oferta-h2">Mouse Gamer Rgb</h2>
    <p className="oferta-description">
      Precisión milimétrica y estilo gamer. Con iluminación RGB
      personalizable, diseño ergonómico y botones programables, este mouse
      te da ventaja en cada partida.
    </p>
    <a className="oferta-btn" href="#">Comprar</a>
  </div>
  <div className="flex items-center justify-center oferta-img sm:w-1/2">
    <img src={Mouse} className="object-contain w-full h-64 " />
  </div>
</article>
{/* <section className="flex-row justify-between bg-amber-50">
  <div>
    <h2>Procesadores</h2>
    <p>lorem jdaskjdashda
    </p>
    <span>ver mas</span>
  </div>
  <div>
    <h2>tarjetas graficas</h2>
    <p>lorem jdaskjdashda
    </p>
    <span>ver mas</span>
  </div>
  <div>
    <h2>almacenamiento </h2>
    <p>lorem jdaskjdashda
    </p>
    <span>ver mas</span>
  </div>
</section> */}


    </header>
  );
};

export default Navbar;
