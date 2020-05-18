import './styles/Box.css';
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
        <section className='contenedorBox'>
          <GlobalCss />
          <div className='elementoBox1anime'>
            <img
              alt=''
              src={this.props.pelicula.portada}
              className='portadaImg'
            />
          </div>
          <div className='elementoBox1anime'>
            {this.props.pelicula.nombre}
          </div>
          <div className='elementoBox1anime'>
          </div>
          <div className='elementoBox1anime'>
            Duración: {this.props.pelicula.duracion}
          </div>

        </section>
    );
  }
}

export default BigBox;
