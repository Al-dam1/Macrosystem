import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';

const DetalleProductos = ({ productos }) => {

  const { id } = useParams();

  const producto = productos.find(
    (elemento) => String(elemento.id) === id
  );

  if (!producto) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div className='fondo-tecnologico'>
    <Navbar/> 
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
      <Footer/>
    </div>
  );
};

export default DetalleProductos;