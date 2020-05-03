import './styles/Lista1.css';

import React, { Component } from 'react';

import Box from './Box';

class Lista1 extends Component {
  render() {
    return (
      <section className="contenedorLista1">
        {this.props.peliculas.map((pelicula) => {
          return (
            <div key={pelicula.peliculasid} className="item">
              <Box pelicula={pelicula} />
            </div>
          );
        })}
      </section>
    );
  }
}

export default Lista1;
