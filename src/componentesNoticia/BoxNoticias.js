import './styles/BoxNoticias.css';

import React, { Component } from 'react';

class BigBox extends Component {
  render() {
    return (
      <section className="contenedorBoxNoticias">
        <div className="elementoBox1Noticias">
          <img
            alt=""
            src={this.props.noticiasFecha.notimagen}
            className="portadaImg"
          />
        </div>
        <div className="elementoBox1Noticias">
          {this.props.noticiasFecha.notfecha}
        </div>
        <div className="elementoBox1Noticias">
          {this.props.noticiasFecha.nottitulo}
        </div>
      </section>
    );
  }
}

export default BigBox;
