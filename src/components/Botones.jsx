import React from 'react'

const Botones = ({texto, color}) => {
    let estilo = {backgroundColor:color, color:'white', bortder:'none',
        paddin:'10px 20px', borderRadius : '5px', with:'200px'
    }
  
  
    return (
    <div>
      <button style={estilo}>{texto}</button>
    </div>
  )
}

export default Botones
