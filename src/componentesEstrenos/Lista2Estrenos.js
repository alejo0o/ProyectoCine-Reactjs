import React, { Component } from 'react';

import Box2 from './Box2Estrenos';
import { Link } from 'react-router-dom';
class Lista2 extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.estrenosDirector.map((pelicula) => {
          return (
            <Link
              to={`/Estrenos/${pelicula.peliculasid}`}
              key={pelicula.peliculasid}
              className='elementoLista2 text-reset text-decoration-none'>
              <Box2 estrenosDirector={pelicula} />
            </Link>
          );
        })}
      </React.Fragment>
    );
  }
}

export default Lista2;
