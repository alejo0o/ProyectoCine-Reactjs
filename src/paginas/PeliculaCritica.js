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
import CajaValoracion from '../componentesCriticas/CajaValoracion/CajaValoracion';
import CajaComentarios from '../componentesCriticas/CajaComentarios/CajaComentarios';
import Recomendaciones from '../componentesCriticas/Lista3';
import Loading from '../components/Loading';
import Error404 from '../components/Error404';
import { withRouter } from "react-router";

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
        Peticiones.getCriticasPromedioPelicula,
        variables
      );
      const respuesta3 = await GQLClient.request(Peticiones.getCriticasValor, {
        page: 1,
      });
      this.setState({
        loading: false,
        pelicula: respuesta.getPeliculaDirector,
        pelicula2: respuesta2.getCriticasPromedioPelicula,
        peliculas: this.state.peliculas.concat(
          respuesta3.getCriticasValor.results.slice(5, 10)
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
    const { history } = this.props;
    if (this.state.loading) {
      return <Loading />;
    }
    if(this.state.error!=null){
      return <Error404></Error404>;
    }
    if (this.state.pelicula != null) {
      console.log(history);
      if (this.state.pelicula2 != null) {
        return (
          <section className='contenedorPeliculaCriticas'>
            <div className='elementoPeliculasCriticas'>
              <div onClick={() => { history.goBack() }} className='botonPeliculasCritica btn'>
                Animes
              </div>
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
              <br />
              <div className='estiloComponenteCaja'>
                <DescripcionPelicula pelicula={this.state.pelicula} />
              </div>
              <br />
              <hr />
              <br />
              <div className='sinopsisPeliculaCritica'>
                {this.state.pelicula.sinopsis}
              </div>
              <hr />
              <br />
              <img
                alt=''
                src={this.state.pelicula.portada}
                className='imagenPeliculaCritica ml-5'
              />
              <br />
              <hr />
              <div>
                <CajaComentarios peliid={this.props.match.params.peliculasid} />
              </div>
            </div>
            <div className='elementoPeliculasCriticas'>
              <Recomendaciones peliculas={this.state.peliculas} />
            </div>
          </section>
        );
      } else {
        return (
          <section className='contenedorPeliculaCriticas'>
            <div className='elementoPeliculasCriticas'>
              <div onClick={() => { history.goBack() }} className='botonPeliculasCritica btn'>
                Animes
              </div>
              <div className='tituloPeliculaCritica'>
                {this.state.pelicula.nombre}
              </div>
              <div className='cajavaloracionPeliculaCritica'>
                <CajaValoracion
                  promedio={0}
                  peliid={this.props.match.params.peliculasid}
                />
              </div>
              <hr />
              <br />
              <div className='estiloComponenteCaja'>
                <DescripcionPelicula pelicula={this.state.pelicula} />
              </div>
              <br />
              <hr />

              <div className='sinopsisPeliculaCritica'>
                {this.state.pelicula.sinopsis}
              </div>
              <br />
              <hr />
              <br />
              <img
                alt=''
                src={this.state.pelicula.portada}
                className='imagenPeliculaCritica ml-5'
              />
              <br />
              <hr />
              <div>
                <CajaComentarios peliid={this.props.match.params.peliculasid} />
              </div>
            </div>
            <div className='elementoPeliculasCriticas'>
              <Recomendaciones peliculas={this.state.peliculas} />
            </div>
          </section>
        );
      }
    } else {
      return (

        <Error404></Error404>
      );
    }
  }
}

export default PeliculaCritica;
