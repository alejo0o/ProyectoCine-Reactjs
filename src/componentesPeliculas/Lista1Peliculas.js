import React, { Component } from 'react';

import Box from './BoxPeliculas';

class Lista1 extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.estrenosDirector.map((pelicula) => {
          return (
            <div key={pelicula.peliculasid} className="item">
              <Box estrenosDirector={pelicula} />
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

export default Lista1;
