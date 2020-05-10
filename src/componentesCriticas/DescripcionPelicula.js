import React, { Component } from 'react';
import './styles/DescripcionPelicula.css';
import { Link } from 'react-router-dom';
class DescripcionPelicula extends Component {
  render() {
    return (
      <div>
        <section className='contenedorDescripcionPelicula'>
          <div className='elementoDescripcionPelicula'>
            <img
              alt=''
              src={this.props.pelicula.portada}
              className='portadaImagenDescripcionPelicula'
            />
          </div>
          <div className='elementoDescripcionPelicula ml-2'>
            <em className='titulosComponente'>Titulo Original:</em>

            <p className='textoComponente'>{this.props.pelicula.nombre}</p>
          </div>
          <div className='elementoDescripcionPelicula ml-2'>
            <em className='titulosComponente'>Fecha de Lanzamiento:</em>

            <p className='textoComponente'>
              {this.props.pelicula.fechadelanzamiento}
            </p>
          </div>
          <div className='elementoDescripcionPelicula ml-2'>
            <em className='titulosComponente'> Director:</em>

            <p className='textoComponente'>
              {this.props.pelicula.pernombre} {this.props.pelicula.perapellido}
            </p>
          </div>
          <div className='elementoDescripcionPelicula ml-2'>
            <em className='titulosComponente'>Duracion:</em>

            <p className='textoComponente'>
              {this.props.pelicula.duracion} minutos
            </p>
          </div>
          <div className='elementoDescripcionPelicula ml-2'>
            <p className='textoComponente'>
              <Link
                to={`/trailers/${this.props.pelicula.peliculasid}`}
                className='botonTrailerDescripcion btn'>
                Trailer
              </Link>
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default DescripcionPelicula;
