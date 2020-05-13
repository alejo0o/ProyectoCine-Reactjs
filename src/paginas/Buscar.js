import "./styles/Buscar.css";

import React, { Component } from "react";
import { Link } from "react-router-dom";
import ClienteGql from "../utils/GqlClient";
import ListaNoticias from "../componentesBuscar/ListaBuscarNoticias";
import ListaPeliculas from "../componentesBuscar/ListaBuscarPeliculas";
import Pagination from "@material-ui/lab/Pagination";
import Peticiones from "../utils/consultasPersonalizadas";
import { withStyles } from "@material-ui/core/styles";

const GQLClient = ClienteGql;

const GlobalCss = withStyles({
  // @global is handled by jss-plugin-global.
  "@global": {
    // You should target [class*="MuiButton-root"] instead if you nest themes.
    ".MuiPagination-root": {
      "@media screen and (max-width: 768px)": {
        marginLeft: 220,
        fontSize: 15,
      },
    },
  },
})(() => null);

class Buscar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: true,
      pageNoticias: 1,
      pagePeliculas: 1,
      word: "",
      infoNoticias: {
        count: 0,
        pages: 0,
        prev: "",
        next: "",
      },
      infoPeliculas: {
        count: 0,
        pages: 0,
        prev: "",
        next: "",
      },
      noticias: [],
      peliculas: [],
      loadNoticias: false,
      loadPeliculas: false,
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
        page: this.state.pageNoticias,
        word: this.props.match.params.word,
      };

      const variables2 = {
        page: this.state.pagePeliculas,
        word: this.props.match.params.word,
      };
      const respuesta = await GQLClient.request(
        Peticiones.getBuscarNoticia,
        variables
      );
      const respuesta2 = await GQLClient.request(
        Peticiones.getBuscarPelicula,
        variables2
      );
      console.log(this.state.word);
      this.setState({
        loading: true,
        infoNoticias: respuesta.getBuscarNoticia.info,
        infoPeliculas: respuesta2.getBuscarPelicula.info,
        noticias: this.state.noticias.concat(
          respuesta.getBuscarNoticia.results
        ),
        peliculas: this.state.peliculas.concat(
          respuesta2.getBuscarPelicula.results
        ),
      });
      console.log(this.state.noticias);
      console.log(this.state.peliculas);
      if (this.state.noticias.length !== 0) {
        this.setState({
          loadNoticias: true,
        });
      } else {
        this.setState({
          loadNoticias: false,
        });
      }
      if (this.state.peliculas.length !== 0) {
        this.setState({
          loadPeliculas: true,
        });
      } else {
        this.setState({
          loadPeliculas: false,
        });
      }
      console.log(this.state.loadPeliculas);
      console.log(this.state.loadNoticias);
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };

  handleChangeN = (event, value) => {
    this.setState({
      infoNoticias: {
        count: 0,
        pages: 0,
        prev: "",
        next: "",
      },
      noticias: [],
    });
    this.state.pageNoticias = value;
    this.fetchData();
  };
  handleChangeP = (event, value) => {
    this.setState({
      infoPeliculas: {
        count: 0,
        pages: 0,
        prev: "",
        next: "",
      },
      peliculas: [],
    });
    this.state.pagePeliculas = value;
    this.fetchData();
  };

  render() {
    if (this.state.loadNoticias && this.state.loadPeliculas) {
      return (
        <section className="contenedorBuscar">
          <GlobalCss />
          <Link to="/Noticias" className="botonNoticiasID btn">
            NOTICIAS
          </Link>
          <div className="contenedorListaNoticias">
            <ListaNoticias noticias={this.state.noticias} />
          </div>
          <div className="contenedorLista3">
            <Pagination
              count={this.state.infoNoticias.pages}
              variant="outlined"
              color="primary"
              onChange={this.handleChangeN}
              showFirstButton
              showLastButton
              shape="rounded"
              className="paginador"
            />
          </div>
          <Link to="/Estrenos" className="botonPeliculaTrailer btn">
            PELICULAS
          </Link>
          <div className="contenedorListaPeliculas">
            <ListaPeliculas peliculas={this.state.peliculas} />
          </div>
          <div className="contenedorLista3">
            <Pagination
              count={this.state.infoPeliculas.pages}
              variant="outlined"
              color="primary"
              onChange={this.handleChangeP}
              showFirstButton
              showLastButton
              shape="rounded"
              className="paginador"
            />
          </div>
        </section>
      );
    } else if (this.state.loadPeliculas) {
      return (
        <section className="contenedorBuscar">
          <Link to="/Estrenos" className="botonPeliculaTrailer btn">
            PELICULAS
          </Link>
          <div className="contenedorListaPeliculas">
            <ListaPeliculas peliculas={this.state.peliculas} />
          </div>
          <div className="contenedorLista3">
            <Pagination
              count={this.state.infoPeliculas.pages}
              variant="outlined"
              color="primary"
              onChange={this.handleChangeP}
              showFirstButton
              showLastButton
              shape="rounded"
              className="paginador"
            />
          </div>
        </section>
      );
    } else if (this.state.loadNoticias) {
      return (
        <section className="contenedorBuscar">
          <GlobalCss />
          <Link to="/Noticias" className="botonNoticiasID btn">
            NOTICIAS
          </Link>
          <div className="contenedorListaNoticias">
            <ListaNoticias noticias={this.state.noticias} />
          </div>
          <div className="contenedorLista3">
            <Pagination
              count={this.state.infoNoticias.pages}
              variant="outlined"
              color="primary"
              onChange={this.handleChangeN}
              showFirstButton
              showLastButton
              shape="rounded"
              className="paginador"
            />
          </div>
        </section>
      );
    } else {
      return (
        <div>
          <h5 className="errorPag">... </h5>
        </div>
      );
    }
  }
}

export default Buscar;
