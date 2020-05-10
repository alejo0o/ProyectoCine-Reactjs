import './styles/Lista3Estrenos.css';

import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

class Lista3 extends Component {
  handleChange() {
    window.location.reload();
  }
  render() {
    return (
      <section>
        <div className="tituloContenedorEstrenos">Te Recomendamos</div>
        {this.props.peliculas.map((pelicula) => {
          return (
            <a
              href={`/Estrenos/${pelicula.peliculasid}`}
              className="text-reset text-decoration-none"
            >
              
              <div className="contenedorLista3Estrenos">
                <div className="imagenContenedorLista3Estrenos">
                  <img
                    src={pelicula.portada}
                    alt=""
                    className="imagenLista3Estrenos"
                  ></img>
                </div>
                <div className="contenedortituloLista3Estrenos">
                  <em className="tituloLista3Estrenos">{pelicula.nombre}</em>
                </div>
                <div className="contenedortituloLista3Estrenos">
                  {pelicula.pernombre}{pelicula.perapellido}
                </div>
                <br />
              </div>
            </a>
          );
        })}
      </section>
    );
  }
}

export default Lista3;
