import React, { useState } from "react";
import { User, ShoppingCart, Menu, X,Search, ChevronDown } from "lucide-react";
import Logo from '../../src/assets/logo.webp'
import { Link } from "react-router-dom";

const Navbar = () => {
  const [MenuMovil, setMenuMovil] = useState(false);
  const [productosAbierto, setProductosAbierto] = useState(false);
  return (
    <>
    
      <header className='fondo-tecnologico'>
        <div className="contenedor">
          
          <div className="contenido ">
          <img 
          src={Logo}
          alt='logo de macrosystem'
          width={'200px'}
          />
           <nav className="sticky z-50 ">
          
           
              <ul className="hidden gap-6 ml-8 md:flex">
                <li className="active">
                  <Link>
                  Inicio
                  </Link>
                  </li>
                <li className="relative group">
                  <Link to='/productos'>
                  <a href="#" className="cursor-pointer">
                    Productos <ChevronDown />
                  </a>
                  </Link>
                  
                  <ul className="absolute hidden p-2 mt-2 bg-gray-900 group-hover:block">
                    <li><Link to='/Conectividad'>Conectividad</Link>
                      
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
                 <Link to='/contacto'>
                 Contacto
                 </Link>
                </li>
                
                
                <li>
                  <Link to='/politicaDevolucion'>
                  Políticas de devolución
                  </Link>
                </li>
                <li>
                  <Link to='/politicaEnvio'>Políticas de envío
                  </Link>
                 
                </li>
              </ul>
            </nav>

            <div className="contenido-users">
              <div className="user">
              <Search color="#c0bfbc"/>
              <span >mi carrito</span>
              </div>
              
              <div className="cart">
                <ShoppingCart color="#c0bfbc" />
                <span  >mi carrito</span>

              </div>
              <button
                className="p-2 md:hidden"
                onClick={() => setMenuMovil(!MenuMovil)}>
                {MenuMovil ? <X color="#c0bfbc" /> : <Menu color="#c0bfbc" />}
              </button>
            </div>
          </div>
        </div>

      </header>
      {MenuMovil && (
        <div className="fixed inset-0 z-50 flex flex-col bg-gray-900 shadow-2xl md:hidden">
       
          <div className="flex justify-end p-4">
            <button
              className="p-2 md:hidden"
              onClick={() => setMenuMovil(!MenuMovil)}>
              {" "}
              {MenuMovil ? (
                <X color="#c0bfbc" />
              ) : (
                <Menu color="#c0bfbc" />
              )}{" "}
            </button>
          </div>

          <ul className="flex flex-col gap-6 px-6 py-4 text-white">
            
            <li><Link to='/'>Inicio</Link></li>
            <li><Link to='/productos'>Productos</Link></li>
            <li><Link to='/contacto'>Contacto</Link></li>
            <li><Link to='/politicaDevolucion'>Políticas de devolución</Link></li>
            <li><Link to='/politicaEnvio'>Políticas de envío</Link></li>
            <div className="flex flex-row gap-8 ">  
              <li className="flex flex-row items-center gap-2">
              <User color="#c0bfbc" />
              <span>Crear cuenta</span>
            </li>
            <li className="flex items-center gap-2">
            
              <span>Iniciar seccion</span>
            </li></div>
           
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
