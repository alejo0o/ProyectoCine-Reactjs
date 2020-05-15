import React, { Component } from "react";

import Box2 from "./BoxBuscarPeliculas";
import { Link } from "react-router-dom";

class Lista2 extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.peliculas.map((pelicula) => {
          return (
            <Link
              to={`/Estrenos/${pelicula.peliculasid}`}
              key={pelicula.peliculasid}
              className="elementoLista2Buscar text-reset text-decoration-none"
            >
              <Box2 peliculas={pelicula} />
            </Link>
          );
        })}
      </React.Fragment>
    );
  }
}

export default Lista2;
