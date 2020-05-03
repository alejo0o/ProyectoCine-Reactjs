import React, { Component } from 'react';

import ClienteGql from '../utils/GqlClient';
import Lista1 from '../componentesNoticia/Lista1Noticias';
import Lista2 from '../componentesNoticia/Lista2Noticias';
import Peticiones from '../utils/consultasPersonalizadas';

//Listas

const GQLClient = ClienteGql;

class Noticias extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: true,
      nextPage: 1,
      noticiasFecha: [],
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
        page: this.state.nextPage,
      };
      const respuesta = await GQLClient.request(
        Peticiones.getNoticiasFecha,
        variables
      );
      this.setState({
        loading: false,
        noticiasFecha: this.state.noticiasFecha.concat(
          respuesta.getNoticiasFecha.results
        ),
        nextPage: this.state.nextPage + 1,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };
  render() {
    return (
      <section className='contenedorCriticas'>
        <div className='contenedorLista1'>
          <Lista1 noticiasFecha={this.state.noticiasFecha} />
        </div>
        <div className='contenedorLista2'>
          <Lista2 noticiasFecha={this.state.noticiasFecha} />
        </div>
      </section>
    );
  }
}

export default Noticias;
