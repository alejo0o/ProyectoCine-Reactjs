import './styles/Box2Peliculas.css';

import React, { Component } from 'react';

class Box2 extends Component {
  render() {
    return (
      <section className="contenedorBox2Peliculas">
        <div className="elementoBox2Peliculas">
          <img
            alt=""
            src={this.props.estrenosDirector.portada}
            className="portadaImg"
          />
        </div>
        <div className="elementoBox2Peliculas ml-2">
          {this.props.estrenosDirector.nombre}
        </div>
        <div className="elementoBox2Peliculas ml-2">
          {this.props.estrenosDirector.pernombre}
          {this.props.estrenosDirector.perapellido}
        </div>
      </section>
    );
  }
}

export default Box2;
