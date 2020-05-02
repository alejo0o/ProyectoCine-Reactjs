import React, { Component } from 'react';

import Box2 from './Box2';
class Lista2 extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.peliculas.map((pelicula) => {
          return (
            <div key={pelicula.peliculasid} className='elementoLista2'>
              <Box2 pelicula={pelicula} />
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

export default Lista2;
