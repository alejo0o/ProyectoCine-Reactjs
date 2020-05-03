import '../componentesCriticas/styles/Box2.css';

import React, { Component } from 'react';

class Box2 extends Component {
  render() {
    return (
      <section className="contenedorBox2">
        <div className="elementoBox2">
          <img
            alt=""
            src={this.props.noticiasFecha.notimagen}
            className="portadaImg"
          />
        </div>
        <div className="elementoBox2 ml-2">
          {this.props.noticiasFecha.notfecha}
        </div>
        <div className="elementoBox2 ml-2">
          {this.props.noticiasFecha.nottitulo}
        </div>
      </section>
    );
  }
}

export default Box2;
