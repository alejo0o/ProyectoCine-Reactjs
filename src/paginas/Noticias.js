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

const Logic = async (user) => {
  try {
    let variables = { sub: user.sub };
    let usuario = await GqlClient.request(
      Peticiones.getUsuarioporSub,
      variables
    );
    usuario = usuario.getUsuarioporSub;

    if (!usuario) {
      variables = {
        input: {
          nickname: user.nickname,
          name: user.name,
          picture: user.picture,
          email: user.email,
          sub: user.sub,
        },
      };
      const respuesta = await GqlClient.request(
        Peticiones.crearUsuario,
        variables
      );
    }
  } catch (error) {
    console.log(error);
  }
};

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
          <SaveUser />
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
