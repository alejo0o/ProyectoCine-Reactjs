import React, { Component } from 'react';
import Rating from '@material-ui/lab/Rating';
import './styles/Box.css';
class BigBox extends Component {
  render() {
    return (
      <section className='contenedorBox'>
        <div className='item'>
          <img
            alt=''
            src={this.props.pelicula.portada}
            className='portadaImg'
          />
        </div>

        <Rating
          name='read-only'
          value={this.props.pelicula.promedio}
          readOnly
          precision={0.5}
        />

        <div className='tituloCritica'>{this.props.pelicula.nombre}</div>
        <div className='subtituloCritica'>{this.props.pelicula.sinopsis}</div>
      </section>
    );
  }
}

export default BigBox;
/*<Rating
              name='read-only'
              value={this.props.pelicula.promedio}
              readOnly
              precision={0.5}
            />*/
