import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Error404.css';

class Error404 extends React.Component{
    render(){
        return <div>        
          <div className="mars"></div>
          <img src="https://mars-404.templateku.co/img/404.svg" class="logo-404" />
          <img src="https://mars-404.templateku.co/img/meteor.svg" class="meteor" />
          <p className="title">Oh no!!</p>
          <p className="subtitle">
            La URL está mal escrita <br /> O la página solicitada no existe ! 
          </p>
          <div align="center" className='BotonTrailer'>
              <Link
                to={"/"}
                className='botonRegresoHome btn'>
                Regresa al Home
              </Link>
            </div>
          <img src="https://mars-404.templateku.co/img/astronaut.svg" className="astronaut" />
          <img src="https://mars-404.templateku.co/img/spaceship.svg" className="spaceship" />
          </div>;
          
    }
}
export default Error404;