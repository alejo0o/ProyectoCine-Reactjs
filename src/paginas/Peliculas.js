import React, { Component } from 'react';

import ClienteGql from '../utils/GqlClient';
import Lista1 from '../componentesPeliculas/Lista1Peliculas';
import Lista2 from '../componentesPeliculas/Lista2Peliculas';
import Pagination from '@material-ui/lab/Pagination';
import Peticiones from '../utils/consultasPersonalizadas';

//Listas

const GQLClient = ClienteGql;

class Peliculas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: true,
      nextPage: 1,
      info: [],
      estrenosDirector: [],
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
        Peticiones.getEstrenosDirector,
        variables
      );
      this.setState({
        loading: false,
        info: Object.values(
          this.state.info.concat(respuesta.getEstrenosDirector.info)
        ),
        estrenosDirector: this.state.estrenosDirector.concat(
          respuesta.getEstrenosDirector.results
        ),
        nextPage: this.state.nextPage + 1,
      });
      console.log(this.state.info);
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };
  render() {
    return (
      <section className="contenedorCriticas">
        <div className="contenedorLista1">
          <Lista1 estrenosDirector={this.state.estrenosDirector} />
        </div>
        <div className="contenedorLista2">
          <Lista2 estrenosDirector={this.state.estrenosDirector} />
        </div>
        <Pagination
          count={this.state.info.count}
          page={this.state.nextPage}
          onChange={this.state.info.next}
        />
      </section>
    );
  }
}

export default Peliculas;
