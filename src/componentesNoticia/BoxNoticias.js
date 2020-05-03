import './styles/BoxNoticias.css';

import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

const GlobalCss = withStyles({
  // @global is handled by jss-plugin-global.
  '@global': {
    // You should target [class*="MuiButton-root"] instead if you nest themes.
    '.MuiRating-root': {
      '@media screen and (max-width: 768px)': {
        fontSize: 15,
      },
    },
  },
})(() => null);

class BigBox extends Component {
  render() {
    return (
      <section className="contenedorBoxNoticias">
        <GlobalCss />
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
