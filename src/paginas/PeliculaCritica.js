import React, { Component } from 'react';
//Estilos
import './styles/PeliculaCritica.css';
import './styles/CriticaPelicula.scss';
///
import { Link } from 'react-router-dom';
import ClienteGql from '../utils/GqlClient';
import Peticiones from '../utils/consultasPersonalizadas';
import DescripcionPelicula from '../componentesCriticas/DescripcionPelicula';
//Componentes
import CajaValoracion from '../Componentes/CajaValoracion/CajaValoracion';
import CajaComentarios from '../Componentes/CajaComentarios/CajaComentarios.js';

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
      pelicula2: {
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
    try {
      const variables = {
        id: this.props.match.params.peliculasid,
      };
      const respuesta = await GQLClient.request(
        Peticiones.getPeliculasDirector,
        variables
      );
      const respuesta2 = await GQLClient.request(
        Peticiones.getCriticasPromedioPelicula,
        variables
      );
      this.setState({
        loading: false,
        pelicula: respuesta.getPeliculaDirector,
        pelicula2: respuesta2.getCriticasPromedioPelicula,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };

  render() {
    if (this.state.pelicula != null) {
      if (this.state.pelicula2 != null) {
        return (
          <section className='contenedorPeliculaCriticas'>
            <div className='elementoPeliculasCriticas'>
              <Link to='/criticas' className='botonPeliculasCritica btn'>
                Criticas
              </Link>
              <div className='tituloPeliculaCritica'>
                {this.state.pelicula.nombre}
              </div>
              <div className='cajavaloracionPeliculaCritica'>
                <CajaValoracion
                  promedio={this.state.pelicula2.promedio}
                  peliid={this.props.match.params.peliculasid}
                />
              </div>
              <hr />
              <div className='estiloComponenteCaja'>
                <DescripcionPelicula pelicula={this.state.pelicula} />
              </div>

              <hr />

              <div className='sinopsisPeliculaCritica'>
                {this.state.pelicula.sinopsis}
              </div>
              <hr />
              <img
                alt=''
                src={this.state.pelicula.portada}
                className='imagenPeliculaCritica ml-5'
              />
              <hr />
              <div>
                <CajaComentarios peliid={this.props.match.params.peliculasid} />
              </div>
            </div>
            <div className='elementoPeliculasCriticas'>sdfdas</div>
          </section>
        );
      } else {
        return (
          <section>
            <div>sin critica</div>
          </section>
        );
      }
    } else {
      return (
        <section>
          <div>Ups pelicula no encontrada</div>
        </section>
      );
    }
  }
}

export default PeliculaCritica;
