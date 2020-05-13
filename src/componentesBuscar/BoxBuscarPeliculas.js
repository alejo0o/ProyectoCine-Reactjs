import "./styles/BoxBuscar.css";

import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";

const GlobalCss = withStyles({
  // @global is handled by jss-plugin-global.
  "@global": {
    // You should target [class*="MuiButton-root"] instead if you nest themes.
    ".MuiRating-root": {
      "@media screen and (max-width: 768px)": {
        fontSize: 15,
      },
    },
  },
})(() => null);

class BigBox extends Component {
  render() {
    return (
      <section className="contenedorBoxBuscar">
        <GlobalCss />
        <div className="elementoBoxBuscar">
          <img
            alt=""
            src={this.props.peliculas.portada}
            className="portadaImgBuscar"
          />
        </div>
        <div className="elementoBoxBuscar">
          {this.props.peliculas.fechadelanzamiento}
        </div>
        <div className="elementoBoxBuscar">{this.props.peliculas.nombre}</div>
      </section>
    );
  }
}

export default BigBox;
