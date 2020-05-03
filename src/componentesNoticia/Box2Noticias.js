import './styles/Box2Noticias.css';

import React, { Component } from 'react';

class Box2 extends Component {
  render() {
    return (
      <section className="contenedorBox2Noticias">
        <div className="elementoBox2Noticias">
          <img
            alt=""
            src={this.props.noticiasFecha.notimagen}
            className="portadaImg"
          />
        </div>
        <div className="elementoBox2Noticias ml-2">
          {this.props.noticiasFecha.notfecha}
        </div>
        <div className="elementoBox2Noticias ml-2">
          {this.props.noticiasFecha.nottitulo}
        </div>
      </section>
    );
  }
}

export default Box2;
