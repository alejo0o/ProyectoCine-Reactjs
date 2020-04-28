import "bootstrap/dist/css/bootstrap.css";

import React, { Component } from "react";

import Peticiones from "../utils/consultasNoticias";

// import "../styles/DescripcionNoticias.css";

class DescripcionNoticias extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      noticiasList: [],
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
      const data = await Peticiones.ClienteGql.request(Peticiones.getPeliculas);
      this.setState({
        loading: false,
        peliculasList: this.state.peliculasList.concat(data.getPeliculas),
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
      <React.Fragment>
        <div className="textoNoticia">
          {this.state.noticiasList.map((noticia) => {
            return (
              <section key={noticia.notid} className="general">
                <h1>Nueva seccion</h1>
                <div className="noticiaDescrip">
                  <p className="first">{noticia.nottexto}</p>
                  <p>{noticia.nottexto}</p>
                </div>
              </section>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default DescripcionNoticias;
