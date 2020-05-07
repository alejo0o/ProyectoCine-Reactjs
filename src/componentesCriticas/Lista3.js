import React, { Component } from 'react';
import Rating from '@material-ui/lab/Rating';
import './styles/Lista3.css';
import { withStyles } from '@material-ui/core/styles';

const GlobalCss = withStyles({
  // @global is handled by jss-plugin-global.
  '@global': {
    // You should target [class*="MuiButton-root"] instead if you nest themes.
    '.MuiRating-root': {
      '@media screen and (max-width: 768px)': {
        fontSize: 15,
      },
    },
  },
})(() => null);

class Lista3 extends Component {
  handleChange() {
    window.location.reload();
  }
  render() {
    return (
      <section>
        <div className='tituloContenedor'>Te Recomendamos</div>
        {this.props.peliculas.map((pelicula) => {
          return (
            <a
              href={`/PeliculaCritica/${pelicula.peliculasid}`}
              className='text-reset text-decoration-none'>
              <GlobalCss />
              <div className='contededorLista3'>
                <div className='imagenContenedorLista3'>
                  <img
                    src={pelicula.portada}
                    alt=''
                    className='imagenLista3'></img>
                </div>
                <Rating
                  name='read-only'
                  value={parseFloat(pelicula.promedio)}
                  readOnly
                  precision={0.5}
                  className='ratingLista3'
                />
                <br />
                <div className='contenedortituloLista3'>
                  <em className='tituloLista3'>{pelicula.nombre}</em>
                </div>
                <br />
              </div>
            </a>
          );
        })}
      </section>
    );
  }
}

export default Lista3;
