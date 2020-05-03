import React, { Component } from 'react';
import Box from './Box';

class Lista1 extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.peliculas.map((pelicula) => {
          return (
            <div key={pelicula.peliculasid} className='item'>
              <Box pelicula={pelicula} />
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

export default Lista1;
