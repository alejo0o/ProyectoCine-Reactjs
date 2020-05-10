import React, { Component } from 'react';

import Box2 from './Box2';
import { Link } from 'react-router-dom';

class Lista2 extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.peliculas.map((pelicula) => {
          return (
            <Link 
              to={`/PeliculaCritica/${pelicula.peliculasid}`}
              key={pelicula.peliculasid} 
              className='elementoLista2 text-reset text-decoration-none'>
              <Box2 pelicula={pelicula} />
            </Link>
          );
        })}
      </React.Fragment>
    );
  }
}

export default Lista2;
