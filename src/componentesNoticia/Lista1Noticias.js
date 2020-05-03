import React, { Component } from 'react';

import Box from './BoxNoticias';

class Lista1 extends Component {
  render() {
    return (
      <section className="contenedorLista1">
        {this.props.noticiasFecha.map((noticia) => {
          return (
            <div key={noticia.notid} className="item">
              <Box noticiasFecha={noticia} />
            </div>
          );
        })}
      </section>
    );
  }
}

export default Lista1;
