import './styles/BoxEstrenos.css';

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
      <section className="contenedorBoxEstrenos">
        <GlobalCss />
        <div className="elementoBox1Estrenos">
          <img
            alt=""
            src={this.props.estrenosDirector.portada}
            className="portadaImg"
          />
        </div>
        <div className="elementoBox1Estrenos">
          {this.props.estrenosDirector.nombre}
        </div>
        <div className="elementoBox1Estrenos">
          {this.props.estrenosDirector.pernombre}
          {this.props.estrenosDirector.perapellido}
        </div>
      </section>
    );
  }
}

export default BigBox;
