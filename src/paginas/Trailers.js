import React, { Component } from 'react';
import ReactPlayer from 'react-player';
//Estilos
import './styles/Trailers.css';
///
import { Link } from 'react-router-dom';
import ClienteGql from '../utils/GqlClient';
import Peticiones from '../utils/consultasPersonalizadas';
//Componentes
import Recomendaciones from '../componentesEstrenos/Lista3Estrenos';
import DescripcionPelicula from '../componentesEstrenos/DescripcionPeliculaEstrenos';

const GQLClient = ClienteGql;

class Trailers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: true,
      peliculaID: {
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
      peliculas: [],
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
        Peticiones.getEstrenosDirector,
        {
          page: 1,
        }
      );
      this.setState({
        loading: false,
        peliculaID: respuesta.getPeliculaDirector,
        peliculas: this.state.peliculas.concat(
          respuesta2.getEstrenosDirector.results.slice(1, 5)
        ),
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
      <section className='contenedorPeliculaTrailer'>
        <div className='elementoPeliculaTrailer'>
          <Link to='/Estrenos' className='botonPeliculaTrailer btn'>
            ESTRENOS
          </Link>
          <div className='tituloPeliculaTrailer'>
            {this.state.peliculaID.nombre}
          </div>
          <div className='fechaPeliculaTrailer'>
            {this.state.peliculaID.fechadelanzamiento}
          </div>
          <div className='wrapper'>
            <ReactPlayer
              className='player'
              url={this.state.peliculaID.trailer}
              width='95%'
              height='100%'
              controls={true}
              playsinline={true}
            />
          </div>
          <div className='sinopsisPeliculaTrailer'>
            {this.state.peliculaID.sinopsis}
          </div>
          <Link
            to={`/PeliculaCritica/${this.state.peliculaID.peliculasid}`}
            className='botonComentario btn'>
            💬 Ver comentarios
          </Link>
          <div className='estiloComponenteCaja'>
            <DescripcionPelicula pelicula={this.state.peliculaID} />
          </div>
        </div>

        <div className='elementoPeliculaTrailer'>
          <Recomendaciones peliculas={this.state.peliculas} />
        </div>
      </section>
    );
  }
}

export default Trailers;
