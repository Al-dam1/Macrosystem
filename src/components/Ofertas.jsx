import React from 'react'
import Data from '../../data/products.json'
const ofertas = Data.filter(
    (producto)=> producto.masVendido
)
const Ofertas = () => {
  return (
    <>
      <h2 className='text-center mt-8 mb-0 text-4xl text-amber-900 overflow-hidden'>Ofertas semanales</h2>
       <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-2 '>
      
      {ofertas.map((producto) => (
        <article
  key={producto.id}
  className="min-w-0 w-full min-h-32 border border-solid p-3 bg-[#111827"
>
  <div className="flex flex-col gap-2">
    <img
      src={producto.image}
      alt={producto.name}
      className="mx-auto h-24 w-1/2 object-contain"
    />

    <h2 className="text-xl break-words">{producto.name}</h2>
    <h3>{producto.category}</h3>
    <p className="break-words">{producto.description}</p>
    <h5>Stock disponible: {producto.stock}</h5>
    <span className="text-2xl">${producto.price}</span>
    <button className="bg-[#00D9F5] text-white">Agregar</button>
  </div>
</article>
      ))}
    </section>
    </>
  )
}

export default Ofertas
