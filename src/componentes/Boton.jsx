import React from 'react';
import '../hojas-de-estilo/Boton.css'

      // Pasamos los props como desestructuracion, y como un operador ternario la className, ademas utilizamos EventListener para onclick
function Boton ({ texto, esBotonDeClick, manejarClick }){
  return (
    <button
      className={ esBotonDeClick ?  'boton-click' : 'boton-reiniciar' }
      onClick={ manejarClick }>
      {texto}
    </button>
  )
}

export default Boton;
