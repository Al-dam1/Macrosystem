import React from 'react'

const encabezadoOferta = ({text}) => {
  return (
    <div className='flex items-center justify-between m-8'>
       <h2
        className="inline-block p-4 m-12 text-lg font-bold text-black border-b-4 aling-center border-b-blue-500 n">
        {text}
      </h2>
      <span className='text-lg font-bold text-green-500'>Ver mas</span>
    </div>
  )
}

export default encabezadoOferta
