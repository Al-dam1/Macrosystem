import React from 'react'
import Data from '../../data/products.json'


const Relacionado = ({category,idActual}) => {
  const filtro = Data.filter((producto) => producto.category === category && producto.id !== idActual)

  return (
    <div className='mb-15'>
      <h1>producto relacionado</h1>
      <article className='flex w-4 h-4 gap-6'>
        {filtro.map((producto)=>(
          
          <div className='flex flex-center gap-10 p-10 items-center'>
          <div className="w-1/2 flex justify-center">
            <img
              src={producto.image}
              alt={producto.name}
              className="w-full max-w-md object-contain"
            />
          </div>
          <div className=' flex flex-col w-1/2 gap-5 min-w-0 bg-white/10 backdrop-blur-xl
    border border-white/30 rounded-2xl shadow-xl p-8'>
            <h1 className='text-3xl font-bold text-white leading-tight overflow-y-hidden'>Detalle producto: {producto.name}</h1>
            <p className='text-2xl font-bold text-gray-300'>Precio: ${producto.price}</p>
            <p className='text-lg text-gray-200'>{producto.description}</p>
            <span className='text-base font-semibold text-gray-300'>stock disponible: {producto.stock}</span>
          </div>
        </div>
        ))}

      </article>
    </div>
  )
}

export default Relacionado
