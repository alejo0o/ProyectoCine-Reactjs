import React, { Component } from 'react';

import Box2 from './Box2Noticias';

class Lista2 extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.noticiasFecha.map((noticia) => {
          return (
            <div key={noticia.notid} className="elementoLista2">
              <Box2 noticiasFecha={noticia} />
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

export default Lista2;
