import React from 'react';
import { useParams } from 'react-router-dom';

const DetalleProductos = ({ productos }) => {

  const { id } = useParams();

  const producto = productos.find(
    (elemento) => String(elemento.id) === id
  );

  if (!producto) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div>
      <h1>Detalle producto: {producto.name}</h1>
      <p>Precio: ${producto.price}</p>
      <p>{producto.description}</p>
      <span>stock disponible: {producto.stock}</span>
      <img src={producto.image} alt={producto.name} />
    </div>
  );
};

export default DetalleProductos;