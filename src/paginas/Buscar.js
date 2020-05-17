import './styles/Buscar.css';

import React, { Component } from 'react';
import ClienteGql from '../utils/GqlClient';
import ListaBuscar from '../componentesBuscar/ListaBuscar';
import Pagination from '@material-ui/lab/Pagination';
import Peticiones from '../utils/consultasPersonalizadas';
import { withStyles } from '@material-ui/core/styles';

const GQLClient = ClienteGql;

const GlobalCss = withStyles({
  // @global is handled by jss-plugin-global.
  '@global': {
    // You should target [class*="MuiButton-root"] instead if you nest themes.
    '.MuiPagination-root': {
      '@media screen and (max-width: 768px)': {
        marginLeft: 220,
        fontSize: 15,
      },
    },
  },
})(() => null);

class Buscar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: true,
      page: 1,
      word: '',
      infoNoticias: {
        count: 0,
        pages: 0,
        prev: '',
        next: '',
      },
      infoPeliculas: {
        count: 0,
        pages: 0,
        prev: '',
        next: '',
      },
      noticias: [],
      peliculas: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({
      loading: true,
      error: null,
    });
    try {
      const variables = {
        page: this.state.page,
        word: this.props.match.params.word,
      };
      const variables2 = {
        page: this.state.page,
        word: this.props.match.params.word,
      };
      const respuesta = await GQLClient.request(
        Peticiones.getBuscarNoticia,
        variables
      );
      const respuesta2 = await GQLClient.request(
        Peticiones.getBuscarPelicula,
        variables2
      );
      this.setState({
        loading: true,
        infoNoticias: respuesta.getBuscarNoticia.info,
        infoPeliculas: respuesta2.getBuscarPelicula.info,
        noticias: this.state.noticias.concat(
          respuesta.getBuscarNoticia.results
        ),
        peliculas: this.state.peliculas.concat(
          respuesta2.getBuscarPelicula.results
        ),
      });
      console.log(this.state.noticias);
      console.log(this.state.peliculas);
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
      console.log(error);
    }
  };

  handleChange = (event, value) => {
    this.setState({
      infoNoticias: {
        count: 0,
        pages: 0,
        prev: '',
        next: '',
      },
      infoPeliculas: {
        count: 0,
        pages: 0,
        prev: '',
        next: '',
      },
      peliculas: [],
      noticias: [],
    });
    this.state.page = value;
    this.fetchData();
  };

  render() {
    if (this.state.noticias && this.state.peliculas) {
      return (
        <section className='contenedorBuscar'>
          <GlobalCss />
          <div className='contenedorLista'>
            <ListaBuscar
              noticias={this.state.noticias}
              peliculas={this.state.peliculas}
            />
          </div>
          <div className='contenedorLista3'>
            <Pagination
              count={Math.ceil(
                (this.state.infoPeliculas.count +
                  this.state.infoNoticias.count) /
                  12
              )}
              variant='outlined'
              color='primary'
              onChange={this.handleChange}
              showFirstButton
              showLastButton
              shape='rounded'
              className='paginador'
            />
          </div>
        </section>
      );
    } else if (this.state.peliculas) {
      return (
        <section className='contenedorBuscar'>
          <div className='contenedorLista'>
            <ListaBuscar peliculas={this.state.peliculas} />
          </div>
          <div className='contenedorLista3'>
            <Pagination
              count={Math.ceil(
                (this.state.infoPeliculas.count +
                  this.state.infoNoticias.count) /
                  12
              )}
              variant='outlined'
              color='primary'
              onChange={this.handleChange}
              showFirstButton
              showLastButton
              shape='rounded'
              className='paginador'
            />
          </div>
        </section>
      );
    } else if (this.state.noticias) {
      return (
        <section className='contenedorBuscar'>
          <GlobalCss />
          <div className='contenedorLista'>
            <ListaBuscar noticias={this.state.noticias} />
          </div>
          <div className='contenedorLista3'>
            <Pagination
              count={Math.ceil(
                (this.state.infoPeliculas.count +
                  this.state.infoNoticias.count) /
                  12
              )}
              variant='outlined'
              color='primary'
              onChange={this.handleChange}
              showFirstButton
              showLastButton
              shape='rounded'
              className='paginador'
            />
          </div>
        </section>
      );
    } else {
      return (
        <div>
          <h5 className='errorPag'>... </h5>
        </div>
      );
    }
  }
}

export default Buscar;
