import React, { Component } from 'react';

import Box from './BoxNoticias';
import { Link } from 'react-router-dom';

class Lista1 extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.noticiasFecha.map((noticia) => {
          return (
            <Link
              to={`/Noticias/${noticia.notid}`}
              key={noticia.notid}
              className="item text-reset text-decoration-none"
            >
              <Box noticiasFecha={noticia} />
            </Link>
          );
        })}
      </React.Fragment>
    );
  }
}

export default Lista1;
