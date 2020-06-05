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
      id: '',
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    //Obtiene el ciente
    //es necesario hace split por el formato en que devuelve auth0
    //var partsArray = this.props.userid.split('|');
    let usuarioid;
    this.setState({
      loading: true,
      error: null,
    });
    try {
      let vars = {
        sub: this.props.userid,
      };

      const usu = await GQLClient.request(Peticiones.getUsuarioporSub, vars);
      this.state.id = usu.getUsuarioporSub.id;
      usuarioid = usu.getUsuarioporSub.id;
      this.setState({
        loading: false,
        error: null,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }

    const variables = {
      idMovie: this.props.peliid,
      idUser: usuarioid,
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
