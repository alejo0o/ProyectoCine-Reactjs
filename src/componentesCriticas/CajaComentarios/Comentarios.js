import React, { Component } from 'react';
import './scss/Comentarios.scss';
import Peticiones from '../../utils/consultasPersonalizadas.js';
import ClienteGql from '../../utils/GqlClient';
import Rating from '@material-ui/lab/Rating';
import Pagination from '@material-ui/lab/Pagination';

const GQLClient = ClienteGql;

class Comentarios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      criticasList: [],
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
      page: 1,
      id: this.props.peliid,
    };
    console.log('holi');
    try {
      const data = await GQLClient.request(
        Peticiones.getCriticasporPelicula,
        variables
      );

      this.setState({
        loading: false,
        criticasList: this.state.criticasList.concat(
          data.getCriticasporPelicula.results
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
      <React.Fragment>
        <div>
          <ul>
            {this.state.criticasList.map((critica) => {
              return (
                <li key={critica.criid} className='listaComentarios'>
                  <div className='critica'>
                    <h6>{critica.email}</h6>
                    <h6 className='puntaje'>Puntaje: </h6>
                    <Rating
                      name='crivalor'
                      value={parseFloat(critica.crivalor)}
                      precision={0.5}
                      size='small'
                      readOnly
                    />
                    <p>{critica.critexto}</p>
                    <h6 className='fecha'>Fecha: {critica.crifecha}</h6>
                    <hr />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Comentarios;

//<Pagination count={10} color="primary" />
