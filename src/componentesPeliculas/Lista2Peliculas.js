import React, { Component } from 'react';

import Box2 from './Box2Peliculas';

class Lista2 extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.estrenosDirector.map((pelicula) => {
          return (
            <div key={pelicula.peliculasid} className="elementoLista2">
              <Box2 estrenosDirector={pelicula} />
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

export default Lista2;
