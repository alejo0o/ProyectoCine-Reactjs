import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Error404.css';

class Error404 extends React.Component{
    render(){
        return (
          <div className="Fondo">        
          <div className="Tierrita">
            
          </div>
          <div className="Imagen1"> <img src="https://mars-404.templateku.co/img/404.svg"  /> </div>

          <div className="Imagen2">  <img src="https://mars-404.templateku.co/img/meteor.svg"  /> </div>
          <div className="Texto"> <p className="title">Oh no!!</p>
          <p className="subtitle">
            URL no válida <br /> O no se encontró la página solicitada! 
          </p> 
          </div>
          <div className="Imagen3"> <img src="https://mars-404.templateku.co/img/astronaut.svg"  /> </div>
          <div className="Imagen4"> <img src="https://mars-404.templateku.co/img/spaceship.svg" /> </div>
          
          </div>
        )
          
    }
}
export default Error404;