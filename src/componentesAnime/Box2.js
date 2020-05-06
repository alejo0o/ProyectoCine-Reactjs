import './styles/Box2.css';

import React, { Component } from 'react';

import Rating from '@material-ui/lab/Rating';

class Box2 extends Component {
  render() {
    return (
      <section className="contenedorBox2">
        <div className="elementoBox2">
          <img
            alt=""
            src={this.props.pelicula.portada}
            className="portadaImg"
          />
        </div>
        <div className="elementoBox2 ml-2">{this.props.pelicula.nombre}</div>
        <div className="elementoBox2 ml-2">{this.props.pelicula.sinopsis}</div>
      </section>
    );
  }
}

export default Box2;
