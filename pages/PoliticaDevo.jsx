import React from 'react'
import Navbar from '../src/components/Navbar'

import Footer from '../src/components/Footer'
const PoliticaDevo = () => {
  return (
    <div className='fondo-tecnologico'>
      <Navbar />
      <div className='mx-7 py-7'>

        <h1 className="mb-8 text-center text-3xl font-bold text-white drop-shadow-lg md:text-4xl overflow-y-hidden p-4">Política de Devolución</h1>

        <p className="mt-10 mb-4 border-l-4 border-cyan-400 pl-4 text-2xl font-bold text-white">
          En MACROSYSTEM trabajamos para garantizar la satisfacción de nuestros clientes.
          La presente política establece las condiciones para solicitar devoluciones,
          cambios y reembolsos de productos adquiridos a través de nuestros canales oficiales.
        </p>

        <h2 className="mt-10 mb-4 border-l-4 border-cyan-400 pl-4 text-2xl font-bold text-white">1. Alcance de la Política</h2>

        <p className="mt-10 mb-4 border-l-4 border-cyan-400 pl-4 text-2xl font-bold text-white">
          Esta política aplica a todos los productos comercializados por MACROSYSTEM,
          salvo aquellos que por su naturaleza indiquen condiciones particulares de garantía o devolución.
        </p>

        <h3 className="mt-6 mb-3 text-xl font-semibold text-cyan-400">Productos Elegibles</h3>

        <p className="mt-10 mb-4 border-l-4 border-cyan-400 pl-4 text-2xl font-bold text-white">
          Podrán solicitar devolución aquellos productos que se encuentren en buen estado,
          con sus accesorios originales, manuales y empaque correspondiente.
        </p>

        <h3 className="mt-6 mb-3 text-xl font-semibold text-cyan-400">Productos No Elegibles</h3>

        <p className="mt-10 mb-4 border-l-4 border-cyan-400 pl-4 text-2xl font-bold text-white">
          No se aceptarán devoluciones de productos dañados por mal uso, manipulación incorrecta
          o modificaciones realizadas por terceros.
        </p>

        <h2 className="mt-10 mb-4 border-l-4 border-cyan-400 pl-4 text-2xl font-bold text-white">2. Plazos de Devolución</h2>

        <p className="mt-10 mb-4 border-l-4 border-cyan-400 pl-4 text-2xl font-bold text-white">
          El cliente podrá solicitar una devolución dentro de los 10 días corridos posteriores
          a la recepción del producto.
        </p>

        <h3 className="mt-6 mb-3 text-xl font-semibold text-cyan-400">Solicitud de Cambio</h3>

        <p className="mt-10 mb-4 border-l-4 border-cyan-400 pl-4 text-2xl font-bold text-white">
          Las solicitudes deberán realizarse a través de nuestros canales de atención,
          adjuntando la información de compra correspondiente.
        </p>

        <h4 className="mt-4 mb-2 text-lg font-medium text-cyan-300">Verificación del Producto</h4>

        <p className="mt-10 mb-4 border-l-4 border-cyan-400 pl-4 text-2xl font-bold text-white">
          Una vez recibido el producto, nuestro equipo técnico verificará su estado para aprobar
          o rechazar la solicitud.
        </p>

        <h2 className="mt-10 mb-4 border-l-4 border-cyan-400 pl-4 text-2xl font-bold text-white">3. Reembolsos</h2>

        <p className="mt-10 mb-4 border-l-4 border-cyan-400 pl-4 text-2xl font-bold text-white">
          Cuando corresponda, el reembolso será procesado mediante el mismo método de pago
          utilizado durante la compra.
        </p>

        <h3 className="mt-6 mb-3 text-xl font-semibold text-cyan-400">Tiempos de Procesamiento</h3>

        <p className="mt-10 mb-4 border-l-4 border-cyan-400 pl-4 text-2xl font-bold text-white">
          Los tiempos de acreditación pueden variar según la entidad bancaria o plataforma de pago utilizada.
        </p>

        <h2 className="mt-10 mb-4 border-l-4 border-cyan-400 pl-4 text-2xl font-bold text-white">4. Garantía</h2>

        <p className="mt-10 mb-4 border-l-4 border-cyan-400 pl-4 text-2xl font-bold text-white">
          Los productos cuentan con garantía conforme a las condiciones establecidas por el fabricante
          y la normativa vigente.
        </p>

        <h3 className="mt-6 mb-3 text-xl font-semibold text-cyan-400">Defectos de Fabricación</h3>

        <p className="mt-10 mb-4 border-l-4 border-cyan-400 pl-4 text-2xl font-bold text-white">
          Los productos que presenten defectos de origen podrán ser reparados, reemplazados o reembolsados,
          según corresponda.
        </p>

        <h2 className="mt-10 mb-4 border-l-4 border-cyan-400 pl-4 text-2xl font-bold text-white">5. Contacto</h2>

        <p className="mt-10 mb-4 border-l-4 border-cyan-400 pl-4 text-2xl font-bold text-white">
          Ante cualquier consulta relacionada con devoluciones, cambios o garantías,
          puedes comunicarte con el equipo de atención de MACROSYSTEM mediante nuestros canales oficiales.
        </p>
      </div>
      <Footer />
    </div>
  )
}

export default PoliticaDevo
