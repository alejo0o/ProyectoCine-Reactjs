import './styles/DetalleNoticia.css';

import React, { Component } from 'react';

import ClienteGql from '../utils/GqlClient';
import { Link } from 'react-router-dom';
import Peticiones from '../utils/consultasPersonalizadas';
import PeticionesNoticias from '../utils/consultasNoticias';
import Recomendaciones from '../componentesNoticia/Lista3Noticias';

const GQLClient = ClienteGql;

class DetalleNoticia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: true,
      noticia: {
        notid: '',
        nottexto: '',
        nottitulo: '',
        notfecha: '',
        notimagen: '',
      },
      noticias: [],
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
        id: this.props.match.params.notid,
      };
      const respuesta = await GQLClient.request(
        PeticionesNoticias.getNoticia,
        variables
      );
      const respuesta2 = await GQLClient.request(Peticiones.getNoticiasFecha, {
        page: 1,
      });
      this.setState({
        loading: false,
        noticia: respuesta.getNoticia,
        noticias: this.state.noticias.concat(
          respuesta2.getNoticiasFecha.results.slice(1, 4)
        ),
      });
      console.log(this.state.noticia);
      console.log(this.state.noticias);
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };

  render() {
    return (
      <section className="contenedorNoticiasID">
        <div className="elementoNoticiasID">
          <Link to="/Noticias" className="botonNoticiasID btn">
            NOTICIAS
          </Link>
          <div className="tituloNoticiasID">{this.state.noticia.nottitulo}</div>
          <div className="fechaNoticiaID">{this.state.noticia.notfecha}</div>
          <img
            alt=""
            src={this.state.noticia.notimagen}
            className="imagenNoticiasID ml-5"
          />
          <div className="textoNoticiasID">{this.state.noticia.nottexto}</div>
        </div>
        <div className="elementoNoticiasID">
          <Recomendaciones noticias={this.state.noticias} />
        </div>
      </section>
    );
  }
}

export default DetalleNoticia;
