import Data from '../../data/products.json';

const Articulos = () => {
  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-2 '>
      {Data.map((producto) => (
        <article
  key={producto.id}
  className="min-w-0 w-full min-h-32 border border-solid p-3"
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
    <button className="bg-green-600 text-white">Agregar</button>
  </div>
</article>
      ))}
    </section>
  );
};

export default Articulos;
