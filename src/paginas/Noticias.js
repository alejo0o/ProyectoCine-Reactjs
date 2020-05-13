import './styles/EstrenosNoticias.css';

import React, { Component } from 'react';

import ClienteGql from '../utils/GqlClient';
import Lista1 from '../componentesNoticia/Lista1Noticias';
import Lista2 from '../componentesNoticia/Lista2Noticias';
import Pagination from '@material-ui/lab/Pagination';
import Peticiones from '../utils/consultasPersonalizadas';
import { useAuth0 } from '../react-auth0-spa';
import GqlClient from '../utils/GqlClient';
import { gql } from 'apollo-boost';

const GQLClient = ClienteGql;

const SaveUser = (props) => {
  const { loading, user } = useAuth0();

  if (user) {
    Logic(user);
  }

  return <React.Fragment></React.Fragment>;
};

const Logic = async (user) => {};

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

  componentDidMount() {
    this.fetchData();
    this.saveUser();
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
      if (this.state.noticias1 != null) {
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
      noticias1: [],
      noticias2: [],
    });
    this.state.page = value;
    this.fetchData();
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
    if (this.state.load) {
      return (
        <section className='contenedorNuevo'>
          <div className='contenedorLista1Nuevo'>
            <Lista1 noticiasFecha={this.state.noticias1} />
          </div>
          <div className='contenedorLista2Nuevo'>
            <Lista2 noticiasFecha={this.state.noticias2} />
          </div>
          <div className='contenedorLista3Nuevo'>
            <Pagination
              count={this.state.info.pages}
              variant='outlined'
              color='primary'
              onChange={this.handleChange}
              showFirstButton
              showLastButton
              shape='rounded'
              className='paginadorNuevo'
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

export default Noticias;
