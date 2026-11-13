import React from 'react'
import Navbar from '../src/components/Navbar'

import Footer from '../src/components/Footer'
const PoliticaDevo = () => {
  return (
    <div className='fondo-tecnologico'>
      <Navbar/>
      <div className='mx-auto flex max-w-5xl flex-col gap-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-blue-950/20 backdrop-blur-xl md:p-12 m-6'>
      <h1 className='w-fit border-b-2 border-blue-500 pb-3 text-3xl font-bold tracking-tight text-white md:text-4xl'>Políticas de devolución</h1>


      <p className='max-w-4xl text-base leading-8 text-slate-300'>
  En Macrosystem queremos que tengas una excelente experiencia de compra.
  Por eso, te brindamos información sobre las condiciones de devolución,
  cambios y garantías de nuestros productos tecnológicos.
</p>

<h2 className='mt-4 flex items-center gap-3 text-xl font-semibold text-blue-400 md:text-2xl'>1. Derecho de arrepentimiento</h2>
<p className='text-sm leading-8 text-slate-300 md:text-base'>
  Si realizaste una compra a través de nuestra tienda online, tenés
  derecho a arrepentirte de la compra dentro de los 10 días corridos
  desde la entrega del producto o la celebración del contrato, lo que
  ocurra último, conforme a la legislación vigente.
</p>
<p className='text-sm leading-8 text-slate-300 md:text-base'>
  Podés solicitar la devolución sin necesidad de justificar el motivo.
  Los gastos correspondientes a la devolución están a cargo del vendedor.
</p>

<h2 className='mt-4 flex items-center gap-3 text-xl font-semibold text-blue-400 md:text-2xl'>2. Productos con fallas o defectos</h2>
<p className='text-sm leading-8 text-slate-300 md:text-base'>
  Si recibís un producto que presenta fallas de funcionamiento,
  daños o defectos, podés comunicarte con nuestro equipo de atención
  al cliente para iniciar el reclamo.
</p>
<p className='text-sm leading-8 text-slate-300 md:text-base'>
  Para agilizar la gestión, recomendamos indicar el número de pedido,
  nombre del producto y una descripción del inconveniente.
</p>
<h2 className='mt-4 flex items-center gap-3 text-xl font-semibold text-blue-400 md:text-2xl'>3. Garantía de los productos</h2>
<p className='text-sm leading-8 text-slate-300 md:text-base'>
  Los productos comercializados cuentan con las garantías correspondientes
  según la legislación vigente y las condiciones particulares de cada artículo.
</p>
<p className='text-sm leading-8 text-slate-300 md:text-base'>
  En Argentina, la garantía legal mínima es de 6 meses para productos
  nuevos y 3 meses para productos usados, contados desde la entrega.
</p>

<h2>4. Condiciones para gestionar una devolución</h2>
<p className='text-sm leading-8 text-slate-300 md:text-base'>
  Para facilitar el proceso, recomendamos conservar el comprobante
  de compra, los accesorios incluidos y la documentación del producto.
  El embalaje original también es recomendable, siempre que sea posible.
</p>
<p className='text-sm leading-8 text-slate-300 md:text-base'>
  Estas recomendaciones no limitan los derechos legales del consumidor.
</p>

<h2 className='mt-4 flex items-center gap-3 text-xl font-semibold text-blue-400 md:text-2xl'>5. Reintegros</h2>
<p>
  Cuando corresponda realizar una devolución del dinero, el reintegro
  se gestionará según el medio de pago utilizado y las disposiciones
  legales aplicables.
</p>
<p className='text-sm leading-8 text-slate-300 md:text-base'>
  El plazo de acreditación puede depender de la entidad bancaria
  o plataforma de pago.
</p>

<h2 className='mt-4 flex items-center gap-3 text-xl font-semibold text-blue-400 md:text-2xl'>6. Contacto</h2>
<p className='text-sm leading-8 text-slate-300 md:text-base'>
  Si necesitás realizar una consulta sobre una devolución, cambio
  o garantía, podés comunicarte con nuestro equipo de atención al cliente.
</p>

<p className='mt-6 border-t border-white/10 pt-6 text-sm font-medium tracking-wide text-blue-400'>
  Macrosystem - Tecnología y soluciones para vos.
</p>
     </div>
      <Footer/>
    </div>
  )
}

export default PoliticaDevo
