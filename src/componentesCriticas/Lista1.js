import React, { Component } from 'react';

import Box from './Box';
import { Link } from 'react-router-dom';

class Lista1 extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.peliculas.map((pelicula) => {
          return (
            <Link
              to={`/PeliculaCritica/${pelicula.peliculasid}`}
              key={pelicula.peliculasid}
              className='item text-reset text-decoration-none'>
              <Box pelicula={pelicula} />
            </Link>
          );
        })}
      </React.Fragment>
    );
  }
}

export default Lista1;
