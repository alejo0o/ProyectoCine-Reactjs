import React, { Component } from 'react';
import CajaComentarios from '../Componentes/CajaComentarios/CajaComentarios.js';
import Peticiones from '../utils/consultasPersonalizadas.js';
import CajaValoracion from '../Componentes/CajaValoracion/CajaValoracion.js';
import ClienteGql from '../utils/GqlClient.js';
import './styles/CriticaPelicula.scss';

const GQLClient = ClienteGql;

class PagCriticas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      pelicula: {
        promedio: '',
        claid: '',
        nombre: '',
        fechadelanzamiento: '',
        duracion: '',
        sinopsis: '',
        trailer: '',
        portada: '',
      },
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

    const variables = {
      id: this.props.match.params.peliId,
    };

    try {
      const data = await GQLClient.request(
        Peticiones.getCriticasPromedioPelicula,
        variables
      );

      this.setState({
        loading: false,
        pelicula: data.getCriticasPromedioPelicula,
      });

      if (this.state.pelicula.promedio != null) {
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

  render() {
    if (this.state.load) {
      return (
        <div className='mt-5'>
          <CajaValoracion
            promedio={this.state.pelicula.promedio}
            peliid={this.props.match.params.peliId}
          />
          <CajaComentarios peliid={this.props.match.params.peliId} />
        </div>
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

export default PagCriticas;
