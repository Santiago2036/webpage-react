import React from 'react';
import './estilos-css/testimonio.css';


function Testimonio(props){
  return(
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio'
        src={require(`./imagenes/${props.imagen}`)}
        alt='Foto de EMA'
      />
      <div className='contenedor-texto-testimonio'>
        <div className='inner'>
          <div className='title'>
            <p className='nombre-testimonio'><strong>{props.nombre}</strong></p>
          </div>
          <div className='onCenter'>
            <div>
              <p className='cargo-testimonio'><strong>{props.cargo}</strong></p>
              <p className='texto-testimonio'>{props.testimonio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );

}

export default Testimonio;