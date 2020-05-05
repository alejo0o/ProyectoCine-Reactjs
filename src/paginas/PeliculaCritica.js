import React, { Component } from 'react';
import './styles/PeliculaCritica.css';
import { Link } from 'react-router-dom';
import ClienteGql from '../utils/GqlClient';
import Peticiones from '../utils/consultasPersonalizadas';
import DescripcionPelicula from '../componentesCriticas/DescripcionPelicula';

const GQLClient = ClienteGql;

class PeliculaCritica extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: true,
      pelicula: {
        peliculasid: '',
        nombre: '',
        sinopsis: '',
        fechadelanzamiento: '',
        trailer: '',
        duracion: 0,
        portada: '',
        pernombre: '',
        perapellido: '',
      },
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
        id: this.props.match.params.peliculasid,
      };
      const respuesta = await GQLClient.request(
        Peticiones.getPeliculasDirector,
        variables
      );
      this.setState({
        loading: false,
        pelicula: respuesta.getPeliculaDirector,
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
      <section className='contenedorPeliculaCriticas'>
        <div className='elementoPeliculasCriticas'>
          <Link to='/criticas' className='botonPeliculasCritica btn'>
            Criticas
          </Link>
          <div>{this.state.pelicula.nombre}</div>
          <div>Componente del boli</div>
          <hr></hr>
          <img
            alt=''
            src={this.state.pelicula.portada}
            className='imagenPeliculaCritica'
          />
          <div className='estiloComponenteCaja'>
            <DescripcionPelicula pelicula={this.state.pelicula} />
          </div>
        </div>
        <div className='elementoPeliculasCriticas'></div>
      </section>
    );
  }
}

export default PeliculaCritica;
