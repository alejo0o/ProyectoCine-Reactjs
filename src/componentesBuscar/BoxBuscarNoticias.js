import "./styles/BoxBuscar.css";

import React, { Component } from "react";

class Box2 extends Component {
  render() {
    return (
      <section className="contenedorBoxBuscar">
        <div className="elementoBoxBuscar">
          <img
            alt=""
            src={this.props.noticias.notimagen}
            className="portadaImgBuscar"
          />
        </div>
        <div className="elementoBoxBuscar ml-2">
          {this.props.noticias.notfecha}
        </div>
        <div className="elementoBoxBuscar ml-2">
          {this.props.noticias.nottitulo}
        </div>
      </section>
    );
  }
}

export default Box2;
