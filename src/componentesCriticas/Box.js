import './styles/Box.css';

import React, { Component } from 'react';

import Rating from '@material-ui/lab/Rating';

class BigBox extends Component {
  render() {
    return (
      <section className="contenedorBox">
        <div className="elementoBox1">
          <img
            alt=""
            src={this.props.pelicula.portada}
            className="portadaImg"
          />
        </div>
        <div className="elementoBox1">
          <Rating
            name="read-only"
            value={this.props.pelicula.promedio}
            readOnly
            precision={0.5}
          />
        </div>
        <div className="elementoBox1">{this.props.pelicula.nombre}</div>
      </section>
    );
  }
}

export default BigBox;
