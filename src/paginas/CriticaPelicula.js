import React, { Component } from 'react';
import CajaComentarios from '../Componentes/CajaComentarios/CajaComentarios.js'
import Peticiones from '../utils/consultasPersonalizadas.js';
import Rating from '@material-ui/lab/Rating';
import CajaValoracion from '../Componentes/CajaValoracion/CajaValoracion.js'
import ClienteGql from '../utils/GqlClient.js';


const GQLClient = ClienteGql;

class PagCriticas extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      pelicula: {
      	promedio: '2',
        claid: '',
        nombre: '',
        fechadelanzamiento: '',
        duracion: '',
        sinopsis: '',
        trailer: '',
        portada: '',
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

    const variables = {
      id: this.props.match.params.peliId,
    };

    console.log(variables);

    try {

      const data = await GQLClient.request(Peticiones.getCriticasPromedioPelicula, variables);

      this.setState({
        loading: false,
        pelicula: data.getCriticasPromedioPelicula,
      });
      console.log(this.state.pelicula);
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };

	render() {
		return (
		  	<div>
		  	  <CajaValoracion promedio={this.state.pelicula.promedio} peliid={this.props.match.params.peliId} />
		  	  <CajaComentarios peliid={this.props.match.params.peliId} />
			</div>
		  );
	}

}

export default PagCriticas;