import React, { Component } from 'react';
import Peticiones from '../../utils/consultasPersonalizadas.js';
import Rating from '@material-ui/lab/Rating';
import ClienteGql from '../../utils/GqlClient';

const GQLClient = ClienteGql;

class ValoracionUsuario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      crivalor: '',
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    //Obtiene el ciente
    //es necesario hace split por el formato en que devuelve auth0
    var partsArray = this.props.userid.split('|');
    const variables = {
      idMovie: this.props.peliid,
      idUser: partsArray[1],
    };
    try {
      const data = await GQLClient.request(
        Peticiones.getCrivalorUsuarioPelicula,
        variables
      );

      this.setState({
        loading: false,
        crivalor: data.getCriticasUsuarioPelicula.crivalor,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  }

  render() {
    return (
      <div>
        <Rating
          name='crivalor'
          className='estrellas'
          value={parseFloat(this.state.crivalor)}
          precision={0.5}
          size='large'
          readOnly
        />
      </div>
    );
  }
}

export default ValoracionUsuario;
