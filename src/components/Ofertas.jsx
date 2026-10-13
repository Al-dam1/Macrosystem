
import React from 'react';
import Data from '../../data/products.json';

const ofertas = Data.filter(
  (producto) => producto.masVendido
);

const Ofertas = () => {
  return (
    <div
      className="fondo-tecnologico min-h-screen text-[#E5E7EB]"
    >

      {/* Contenido de ofertas */}
      <section className="px-4 py-8 sm:px-6">
        <h2 className="mb-8 text-center text-3xl font-bold text-white drop-shadow-lg md:text-4xl">
          Ofertas semanales
          <span className="mx-auto mt-3 block h-1 w-20 rounded-full bg-[#00D9F5]" />
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ofertas.map((producto) => (
            <article
              key={producto.id}
              className="min-w-0 w-full rounded-2xl border border-white/20 bg-[#10153D]/50 p-4 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-[#10153D]/70 hover:shadow-cyan-400/10"
            >
              <div className="flex flex-col gap-3">
                <img
                  src={producto.image}
                  alt={producto.name}
                  className="mx-auto h-40 w-full rounded-lg object-contain"
                />

                <h3 className="break-words text-xl font-bold text-white">
                  {producto.name}
                </h3>

                <p className="text-sm text-[#00D9F5]">
                  {producto.category}
                </p>

                <p className="break-words text-sm leading-relaxed text-gray-300">
                  {producto.description}
                </p>

                <p className="text-sm text-gray-300">
                  Stock disponible: {producto.stock}
                </p>

                <span className="text-2xl font-bold text-[#00D9F5]">
                  ${producto.price}
                </span>

                <button
                  type="button"
                  className="w-full rounded-lg bg-[#00D9F5] px-4 py-2 font-semibold text-[#080B14] transition hover:bg-[#67E8F9]"
                >
                  Comprar
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Ofertas;
