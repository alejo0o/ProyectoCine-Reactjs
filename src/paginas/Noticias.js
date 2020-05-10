import './styles/Criticas.css';

import React, { Component } from 'react';

import ClienteGql from '../utils/GqlClient';
import Lista1 from '../componentesNoticia/Lista1Noticias';
import Lista2 from '../componentesNoticia/Lista2Noticias';
import Pagination from '@material-ui/lab/Pagination';
import Peticiones from '../utils/consultasPersonalizadas';
import { withStyles } from '@material-ui/core/styles';

const GQLClient = ClienteGql;

const GlobalCss = withStyles({
  '@global': {
    '.MuiPagination-root': {
      '@media screen and (max-width: 768px)': {
        marginLeft: 220,
        fontSize: 15,
      },
    },
  },
})(() => null);

class Noticias extends Component {
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
      noticias1: [],
      noticias2: [],
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
        Peticiones.getNoticiasFecha,
        variables
      );
      this.setState({
        loading: false,
        info: respuesta.getNoticiasFecha.info,
        noticias1: this.state.noticias1.concat(
          respuesta.getNoticiasFecha.results.slice(0, 5)
        ),
        noticias2: this.state.noticias2.concat(
          respuesta.getNoticiasFecha.results.slice(5, 10)
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
      noticias1: [],
      noticias2: [],
    });
    this.state.page = value;
    this.fetchData();
  };

  render() {
    return (
      <section className="contenedorCriticas">
        <GlobalCss />
        <div className="contenedorLista1">
          <Lista1 noticiasFecha={this.state.noticias1} />
        </div>
        <div className="contenedorLista2">
          <Lista2 noticiasFecha={this.state.noticias2} />
        </div>
        <div className="contenedorLista3">
          <Pagination
            count={this.state.info.pages}
            variant="outlined"
            color="primary"
            onChange={this.handleChange}
            showFirstButton
            showLastButton
            shape="rounded"
            className="paginador"
          />
        </div>
      </section>
    );
  }
}

export default Noticias;
