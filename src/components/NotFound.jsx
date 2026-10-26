
import React from 'react'
import Found from '../../src/assets/No.png'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="relative flex min-h-screen w-full items-end justify-center overflow-hidden bg-black">

      <img
        src={Found}
        alt="Página no encontrada"
        className="absolute inset-0 min-h-screen bg-cover bg-center bg-no-repeat  w-full"
      />

      <Link
        to="/"
        className="absolute bottom-18 left-1/2 z-10 w-80
        -translate-x-1/2 rounded-2xl
        border border-white/30
        bg-white/10 p-6 text-center font-semibold text-white font-extrabold
        shadow-lg backdrop-blur-xl
        transition-all duration-300
        hover:bg-white/20 hover:border-white/50
        hover:shadow-cyan-500/20"
      >
        Volver al inicio
      </Link>

    </div>
  )
}

export default NotFound
