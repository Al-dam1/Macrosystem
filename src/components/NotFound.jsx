import React from 'react'
import Found from '../../src/assets/No.png'

const notFound = () => {
  return (
    <div className=''>
      <img 
      src={Found}
      className='min-h-screen bg-cover bg-center bg-no-repeat'/>
    </div>
  )
}

export default notFound
