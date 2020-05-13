import './styles/EstrenosNoticias.css';

import React, { Component } from 'react';

import ClienteGql from '../utils/GqlClient';
import Lista1 from '../componentesEstrenos/Lista1Estrenos';
import Lista2 from '../componentesEstrenos/Lista2Estrenos';
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

class Estrenos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      loading: false,
      page: 1,
      info: {
        count: 0,
        pages: 0,
        prev: '',
        next: '',
      },
      estrenos1: [],
      estrenos2: [],
      load:false
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
        Peticiones.getEstrenosDirector,
        variables
      );
      this.setState({
        loading: false,
        info: respuesta.getEstrenosDirector.info,
        estrenos1: this.state.estrenos1.concat(
          respuesta.getEstrenosDirector.results.slice(0, 5)
        ),
        estrenos2: this.state.estrenos2.concat(
          respuesta.getEstrenosDirector.results.slice(5, 10)
        ),
      });
      if (this.state.estrenos1 != null) {
        this.setState({
          load: true,
        });
      } else {
        this.setState({
          load: false,
        });
      }
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
      estrenos1: [],
      estrenos2: [],
    });
    this.state.page = value;
    this.fetchData();
  };
  render() {
    if (this.state.load) {
      return (
        <section className="contenedorNuevo">
          <GlobalCss />
        <div className="contenedorLista1Nuevo">
          <Lista1 estrenosDirector={this.state.estrenos1} />
        </div>
        <div className="contenedorLista2Nuevo">
          <Lista2 estrenosDirector={this.state.estrenos2} />
        </div>
        <div className="contenedorLista3Nuevo">
          <Pagination
            count={this.state.info.pages}
            variant="outlined"
            color="primary"
            onChange={this.handleChange}
            showFirstButton
            showLastButton
            shape="rounded"
            className="paginadorNuevo"
          />
        </div>
      </section>
      );
    } else {
      return (
        <div>
          <h5 className='errorPag'></h5>
        </div>
      );
    }
  }
}

export default Estrenos;
