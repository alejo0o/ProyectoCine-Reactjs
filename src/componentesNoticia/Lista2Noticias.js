import React, { Component } from "react";

import Box2 from "./Box2Noticias";
import { Link } from "react-router-dom";

class Lista2 extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.noticiasFecha.map((noticia) => {
          return (
            <Link
              to={`/Noticias/${noticia.notid}`}
              key={noticia.notid}
              className="elementoLista2 text-reset text-decoration-none"
            >
              <Box2 noticiasFecha={noticia} />
            </Link>
          );
        })}
      </React.Fragment>
    );
  }
}

export default Lista2;
