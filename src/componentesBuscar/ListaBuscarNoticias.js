import React, { Component } from "react";

import Box from "./BoxBuscarNoticias";
import { Link } from "react-router-dom";

class Lista1 extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.noticias.map((noticia) => {
          return (
            <Link
              to={`/Noticias/${noticia.notid}`}
              key={noticia.notid}
              className="elementoLista2Buscar text-reset text-decoration-none"
            >
              <Box noticias={noticia} />
            </Link>
          );
        })}
      </React.Fragment>
    );
  }
}

export default Lista1;
