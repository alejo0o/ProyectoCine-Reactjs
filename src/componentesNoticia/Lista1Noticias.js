import React, { Component } from 'react';

import Box from './BoxNoticias';

class Lista1 extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.noticiasFecha.map((noticia) => {
          return (
            <div key={noticia.notid} className="item">
              <Box noticiasFecha={noticia} />
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

export default Lista1;
