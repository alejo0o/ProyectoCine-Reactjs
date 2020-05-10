import React, { Component } from 'react';

import Box from './BoxEstrenos';
import { Link } from 'react-router-dom';
class Lista1 extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.estrenosDirector.map((pelicula) => {
          return (
            <Link
            to={`/Estrenos/${pelicula.peliculasid}`}
            key={pelicula.peliculasid}
            className='item text-reset text-decoration-none'>
            <Box estrenosDirector={pelicula} />
          </Link>
          );
        })}
      </React.Fragment>
    );
  }
}

export default Lista1;
