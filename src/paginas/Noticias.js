import React, { Component } from 'react';

import ClienteGql from '../utils/GqlClient';
import GqlClient from '../utils/GqlClient';
import Lista1 from '../componentesNoticia/Lista1Noticias';
import Lista2 from '../componentesNoticia/Lista2Noticias';
import Loading from '../components/Loading';
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

class Noticias extends Component {
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
      noticias1: [],
      noticias2: [],
      load: false,
    };
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  componentDidMount() {
    this.interval = setTimeout(() => {
      this.setState((state) => ({ showCounter: !state.showCounter }));
      this.fetchData();
      this.saveUser();
    }, 500);
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
    this.globalPage = value;
  };

  saveUser = async () => {
    this.setState({
      loading: true,
      error: null,
    });
    const { usuario } = this.props;
    if (usuario) {
      try {
        let variables = { sub: usuario.sub };
        let usuarioActual = await GQLClient.request(
          Peticiones.getUsuarioporSub,
          variables
        );
        usuarioActual = usuarioActual.getUsuarioporSub;

        if (!usuarioActual) {
          variables = {
            input: {
              nickname: usuario.nickname,
              name: usuario.name,
              picture: usuario.picture,
              email: usuario.email,
              sub: usuario.sub,
            },
          };
          await GqlClient.request(Peticiones.crearUsuario, variables);
          this.setState({
            loading: false,
            error: null,
          });
        }
      } catch (error) {
        this.setState({
          loading: false,
          error: error,
        });
      }
    }
  };

  render() {
    if (this.state.loading) {
      return <Loading />;
    }
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
            page={this.globalPage}
          />
        </div>
      </section>
    );
  }
}

export default Noticias;
