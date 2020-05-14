import React, { Component } from "react";
import Box2 from "./BoxBuscarPeliculas";
import Box from "./BoxBuscarNoticias";
import { Link } from "react-router-dom";

class Lista1 extends Component {
  render() {
    console.log(this.props.noticias);
    console.log(this.props.peliculas);
    return (
      <React.Fragment>
        {this.props.noticias.map((noticia) => {
          return (
            <Link
              to={`/Noticias/${noticia.notid}`}
              key={noticia.notid}
              className="elementoLista2Buscar text-reset text-decoration-none"
            >
              <Box noticias={noticia} />
            </Link>
          );
        })}
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

export default Lista1;
