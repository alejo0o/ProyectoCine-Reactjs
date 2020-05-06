import React, { Component } from 'react';
import './styles/DescripcionPelicula.css';
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
            <em className='titulosComponente'> Trailer:</em>

            <p className='textoComponente'>{this.props.pelicula.trailer}</p>
          </div>
        </section>
      </div>
    );
  }
}

export default DescripcionPelicula;
