import React, { Component } from 'react';
import './styles/Lista2.css';
import Box2 from './Box2';
class Lista2 extends Component {
  render() {
    return (
      <section className='contenedorLista2'>
        {this.props.peliculas.map((pelicula) => {
          return (
            <div key={pelicula.peliculasid} className='elementoLista2'>
              <Box2 pelicula={pelicula} />
            </div>
          );
        })}
      </section>
    );
  }
}

export default Lista2;
