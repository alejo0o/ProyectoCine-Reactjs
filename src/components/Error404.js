import React from 'react';

import './styles/Error404.css';

class Error404 extends React.Component {
  render() {
    return (
      <div className='Fondo'>
        <div className='Tierrita'></div>
        <div className='Imagen1'>
          <img src='https://mars-404.templateku.co/img/404.svg' alt='' />{' '}
        </div>

        <div className='Imagen2'>
          <img src='https://mars-404.templateku.co/img/meteor.svg' alt='' />
        </div>
        <div className='Texto'>
          <p className='title'>Oh no!!</p>
          <p className='subtitle'>
            URL no válida <br /> O no se encontró la página solicitada!
          </p>
        </div>
        <div className='Imagen3'>
          <img src='https://mars-404.templateku.co/img/astronaut.svg' alt='' />
        </div>
        <div className='Imagen4'>
          <img src='https://mars-404.templateku.co/img/spaceship.svg' alt='' />
        </div>
      </div>
    );
  }
}
export default Error404;
