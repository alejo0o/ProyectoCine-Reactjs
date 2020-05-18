import React, { Component } from 'react';
import './styles/DescripcionPeliculaEstrenos.css';
class DescripcionPelicula extends Component {
  render() {
    return (
      <div>
        <section className='contenedorDescripcionPeliculaEstrenos'>
          <div className='elementoDescripcionPeliculaEstrenos'>
            <img
              alt=''
              src={this.props.pelicula.portada}
              className='portadaImagenDescripcionPeliculaEstrenos'
            />
          </div>
          <div className='elementoDescripcionPeliculaEstrenos ml-2'>
            <em className='titulosComponenteEstrenos'>Titulo Original:</em>

            <p className='textoComponenteEstrenos'>{this.props.pelicula.nombre}</p>
          </div>
          <div className='elementoDescripcionPeliculaEstrenos ml-2'>
            <em className='titulosComponenteEstrenos'>Fecha de Lanzamiento:</em>

            <p className='textoComponenteEstrenos'>
              {this.props.pelicula.fechadelanzamiento}
            </p>
          </div>
          <div className='elementoDescripcionPeliculaEstrenos ml-2'>
            <em className='titulosComponenteEstrenos'> Director:</em>

            <p className='textoComponenteEstrenos'>
              {this.props.pelicula.pernombre} {this.props.pelicula.perapellido}
            </p>
          </div>
          <div className='elementoDescripcionPeliculaEstrenos ml-2'>
            <em className='titulosComponenteEstrenos'>Duracion:</em>

            <p className='textoComponenteEstrenos'>
              {this.props.pelicula.duracion} minutos
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default DescripcionPelicula;
