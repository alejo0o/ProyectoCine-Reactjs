import React, { Component } from 'react';
import './styles/Criticas.css';
import Peticiones from '../utils/consultasPersonalizadas';
import ClienteGql from '../utils/GqlClient';
//Listas
import Lista1 from '../componentesCriticas/Lista1';
import Lista2 from '../componentesCriticas/Lista2';
//Material UI
import Pagination from '@material-ui/lab/Pagination';
import { withStyles } from '@material-ui/core/styles';
import PaginationItem from '@material-ui/lab/PaginationItem';
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

class Criticas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: true,
      page: 1,
      info: {
        count: 0,
        pages: 0,
        prev: '',
        next: '',
      },
      peliculasData1: [],
      peliculasData2: [],
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
      };
      const respuesta = await GQLClient.request(
        Peticiones.getCriticasValor,
        variables
      );
      this.setState({
        loading: false,
        info: respuesta.getCriticasValor.info,
        peliculasData1: this.state.peliculasData1.concat(
          respuesta.getCriticasValor.results.slice(0, 5)
        ),
        peliculasData2: this.state.peliculasData1.concat(
          respuesta.getCriticasValor.results.slice(5, 10)
        ),
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };
  handleChange = (event, value) => {
    this.setState({
      info: {
        count: 0,
        pages: 0,
        prev: '',
        next: '',
      },
      peliculasData1: [],
      peliculasData2: [],
    });
    this.state.page = value;
    this.fetchData();
  };

  render() {
    return (
      <section className='contenedorCriticas'>
        <GlobalCss />
        <div className='contenedorLista1'>
          <Lista1 peliculas={this.state.peliculasData1} />
        </div>
        <div className='contenedorLista2'>
          <Lista2 peliculas={this.state.peliculasData2} />
        </div>
        <div className='contenedorLista3'>
          <Pagination
            count={this.state.info.pages}
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
  }
}

export default Criticas;
