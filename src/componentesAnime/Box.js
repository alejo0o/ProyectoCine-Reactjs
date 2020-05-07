import './styles/Box.css';
import React, { Component } from 'react';

import Rating from '@material-ui/lab/Rating';
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
    var link = '/Criticas/' + this.props.pelicula.peliculasid;
    return (
        <a href={link}>
        <section className='contenedorBox'>
          <GlobalCss />
          <div className='elementoBox1'>
            <img
              alt=''
              src={this.props.pelicula.portada}
              className='portadaImg'
            />
          </div>
          <div className='elementoBox1'>{this.props.pelicula.nombre}</div>
        </section>
        </a>
    );
  }
}

export default BigBox;
