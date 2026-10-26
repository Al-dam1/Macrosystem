import React from 'react'

import Mouse from "../../src/assets/mouse1.png";
const OfertaDia = () => {
  return (
    <div className='fondo-tecnologico pr-10'>
       <article className="flex flex-col items-center mx-auto sm:flex-row sm:justify-between sm:items-start sm:mx-auto mb-12">
          <div className="oferta sm:text-left">
            <span className="oferta-span">Oferta del dia!</span>
            <h2 className="oferta-h2">Mouse Gamer Rgb</h2>
            <p className="oferta-description">
              Precisión milimétrica y estilo gamer. Con iluminación RGB
              personalizable, diseño ergonómico y botones programables, este
              mouse te da ventaja en cada partida.
            </p>
            <a className="oferta-btn" href="#">
              Comprar
            </a>
          </div>
          <div className="flex items-center justify-center oferta-img sm:w-1/2">
            <img src={Mouse} className="object-contain w-full h-64 mx-auto" />
          </div>
        </article>
    </div>
  )
}

export default OfertaDia
