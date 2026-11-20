import React from 'react'

import Navbar from '../src/components/Navbar'

import Footer from '../src/components/Footer'

const PoliticaEnvio = () => {
  return (
    <div className='fondo-tecnologico'>
      <Navbar /> 
      <div className='mx-7 py-7'>
      <h1 className="mb-8 text-center text-3xl font-bold text-white drop-shadow-lg md:text-4xl overflow-y-hidden p-4">Política de Envíos</h1>

      <p className="mb-6 text-base leading-8 text-gray-300">
        En MACROSYSTEM nos esforzamos por garantizar entregas seguras, rápidas y eficientes. A continuación, se detallan las condiciones generales aplicables a todos los envíos realizados a través de nuestra tienda.
      </p>

      <h2 className="mt-10 mb-4 border-l-4 border-cyan-400 pl-4 text-2xl font-bold text-white">1. Cobertura de Envíos</h2>

      <p className="mb-6 text-base leading-8 text-gray-300">
        Realizamos envíos a todo el territorio nacional mediante operadores logísticos seleccionados. La disponibilidad del servicio puede variar según la ubicación del destinatario.
      </p>

      <h3 className="mt-6 mb-3 text-xl font-semibold text-cyan-400">Zonas Disponibles</h3>

      <p className="mb-6 text-base leading-8 text-gray-300">
        Los envíos se realizan a domicilios particulares, comercios y puntos de retiro habilitados según la cobertura de la empresa transportista.
      </p>

      <h2 className="mt-10 mb-4 border-l-4 border-cyan-400 pl-4 text-2xl font-bold text-white">2. Tiempo de Entrega</h2>

      <p className="mb-6 text-base leading-8 text-gray-300">
        Los plazos de entrega son estimados y comienzan a contarse una vez confirmado el pago de la compra.
      </p>

      <h3 className="mt-6 mb-3 text-xl font-semibold text-cyan-400">Procesamiento del Pedido</h3>

      <p className="mb-6 text-base leading-8 text-gray-300">
        Todos los pedidos son verificados y preparados antes de ser despachados. Este proceso puede requerir entre 24 y 72 horas hábiles.
      </p>

      <h3 className="mt-6 mb-3 text-xl font-semibold text-cyan-400">Entrega del Producto</h3>

      <p className="mb-6 text-base leading-8 text-gray-300">
        Los tiempos de transporte dependerán de la localidad de destino, condiciones climáticas, fechas especiales o situaciones ajenas a MACROSYSTEM.
      </p>

      <h2 className="mt-10 mb-4 border-l-4 border-cyan-400 pl-4 text-2xl font-bold text-white">3. Costos de Envío</h2>

      <p className="mb-6 text-base leading-8 text-gray-300">
        El costo de envío se calculará automáticamente durante el proceso de compra según el destino, peso y dimensiones de los productos seleccionados.
      </p>

      <h3 className="mt-6 mb-3 text-xl font-semibold text-cyan-400">Promociones de Envío</h3>

      <p className="mb-6 text-base leading-8 text-gray-300">
        Periódicamente podrán ofrecerse promociones especiales con envío gratuito o descuentos en costos de logística para determinadas zonas o productos.
      </p>

      <h2 className="mt-10 mb-4 border-l-4 border-cyan-400 pl-4 text-2xl font-bold text-white">4. Seguimiento del Pedido</h2>

      <p className="mb-6 text-base leading-8 text-gray-300">
        Una vez despachado el pedido, el cliente podrá recibir información de seguimiento para conocer el estado y la ubicación de su compra.
      </p>

      <h3 className="mt-6 mb-3 text-xl font-semibold text-cyan-400">Actualización del Estado</h3>

      <p className="mb-6 text-base leading-8 text-gray-300">
        Las actualizaciones son proporcionadas por la empresa de transporte y pueden sufrir demoras eventuales en su sincronización.
      </p>

      <h className="mt-10 mb-4 border-l-4 border-cyan-400 pl-4 text-2xl font-bold text-white">5. Recepción del Pedido</h>

      <p className="mb-6 text-base leading-8 text-gray-300">
        Se recomienda verificar el estado del paquete al momento de la entrega. Cualquier irregularidad deberá informarse dentro de las primeras 48 horas posteriores a la recepción.
      </p>

      <h3 className="mt-6 mb-3 text-xl font-semibold text-cyan-400">Productos Dañados</h3>

      <p className="mb-6 text-base leading-8 text-gray-300">
        Si el paquete presenta daños visibles o el producto llega en condiciones inadecuadas, el cliente deberá comunicarse con nuestro equipo de atención para gestionar la correspondiente solución.
      </p>

      <h2 className="mt-10 mb-4 border-l-4 border-cyan-400 pl-4 text-2xl font-bold text-white">6. Información Incorrecta</h2>

      <p className="mb-6 text-base leading-8 text-gray-300">
        Es responsabilidad del cliente proporcionar datos completos y correctos para la entrega. MACROSYSTEM no será responsable por retrasos ocasionados por direcciones incompletas o incorrectas.
      </p>

      <h2 className="mt-10 mb-4 border-l-4 border-cyan-400 pl-4 text-2xl font-bold text-white">7. Contacto</h2>

      <p className="mb-6 text-base leading-8 text-gray-300">
        Ante cualquier consulta relacionada con envíos, seguimiento o recepción de pedidos, puedes comunicarte con nuestro equipo de atención al cliente a través de los canales oficiales de contacto.
      </p>
      </div>
      <Footer />
    </div>
  )
}

export default PoliticaEnvio
